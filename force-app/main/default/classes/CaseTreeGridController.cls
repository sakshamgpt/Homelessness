public with sharing class CaseTreeGridController {
    
    // Method to fetch parent account name for a given caseId
    @AuraEnabled(cacheable=true)
    public static String getParentAccount(Id caseId) {
        Case c = [SELECT Id, CaseNumber, AccountId FROM Case WHERE Id = :caseId];
        Account account = [SELECT Id, Name FROM Account WHERE Id = :c.AccountId];
        return account.Name;
    }

    // Method to fetch related records structured in a hierarchical format
    @AuraEnabled(cacheable=true)
    public static CaseWrapper getRelatedRecords(Id caseId) {
    CaseWrapper caseData = new CaseWrapper();
    caseData.caseId = caseId;

    // Query participants with related care plans and benefits in one go
    List<Account> participants = [SELECT Id, Name,
                                    (SELECT Id, Name, StartDate, EndDate, Status,
                                            (SELECT Id, Name, ProgramEnrollmentId, ProgramEnrollment.Name, BenefitId, Benefit.Name, Benefit.BenefitType.Name, Status
                                             FROM BenefitAssignmentParentRecords)
                                     FROM CarePlanParticipants
                                     WHERE CaseId = :caseId)
                                 FROM Account
                                 WHERE Id IN (SELECT ParticipantId FROM CaseParticipant WHERE CaseId = :caseId)];

    // Map to store CaseParticipant data
    Map<Id, CaseParticipant> participantMap = new Map<Id, CaseParticipant>();
    for (CaseParticipant cp : [SELECT Id, ParticipantId, Role, Status FROM CaseParticipant WHERE CaseId = :caseId]) {
        participantMap.put(cp.ParticipantId, cp);
    }

    // Process each participant and their related care plans and benefits
    for (Account participant : participants) {
        List<CarePlanWrapper> careplanWrappers = new List<CarePlanWrapper>();

        for (CarePlan carePlanParticipant : participant.CarePlanParticipants) {
            List<BenefitWrapper> benefitWrappers = new List<BenefitWrapper>();

            // Process benefits for the current care plan participant
            for (BenefitAssignment benefitAssignment : carePlanParticipant.BenefitAssignmentParentRecords) {
                benefitWrappers.add(new BenefitWrapper(
                    benefitAssignment.Id,
                    benefitAssignment.Benefit.Name,
                    benefitAssignment.ProgramEnrollment.Name,
                    benefitAssignment.Status,
                    benefitAssignment.Benefit.BenefitType.Name
                ));
            }

            careplanWrappers.add(new CarePlanWrapper(
                carePlanParticipant.Id,
                carePlanParticipant.Name,
                Date.valueOf(carePlanParticipant.StartDate),
                Date.valueOf(carePlanParticipant.EndDate),
                carePlanParticipant.Status,
                benefitWrappers
            ));
        }

        // Retrieve CaseParticipant Id, Role, and Status
        CaseParticipant cp = participantMap.get(participant.Id);
        String caseParticipantId = (cp != null) ? cp.Id : '';
        String role = (cp != null) ? cp.Role : '';
        String status = (cp != null) ? cp.Status : '';

        caseData.participants.add(new ParticipantWrapper(
            caseParticipantId,
            participant.Name,
            role,
            status,
            careplanWrappers,
            participant.Id  // Pass AccountId
        ));
    }

    return caseData;
}


    // Wrapper class to structure the data for Aura/LWC consumption
    public class CaseWrapper {
        @AuraEnabled public Id caseId { get; set; }
        @AuraEnabled public List<ParticipantWrapper> participants { get; set; }

        public CaseWrapper() {
            this.participants = new List<ParticipantWrapper>();
        }
    }

    // Wrapper class for participants
    public class ParticipantWrapper {
    @AuraEnabled public String Id { get; set; }
    @AuraEnabled public String Name { get; set; }
    @AuraEnabled public String Role { get; set; }
    @AuraEnabled public String Status { get; set; }
    @AuraEnabled public List<CarePlanWrapper> careplans { get; set; }
    @AuraEnabled public Id AccountId { get; set; }  // Add AccountId property

    public ParticipantWrapper(String participantId, String name, String role, String status, List<CarePlanWrapper> careplans, Id accountId) {
        this.Id = participantId;
        this.Name = name;
        this.Role = role;
        this.Status = status;
        this.careplans = careplans;
        this.AccountId = accountId;  // Initialize AccountId
    }
}


    // Wrapper class for care plans
    public class CarePlanWrapper {
        @AuraEnabled public Id carePlanId { get; set; }
        @AuraEnabled public String Name { get; set; }
        @AuraEnabled public Date StartDate { get; set; }
        @AuraEnabled public Date EndDate { get; set; }
        @AuraEnabled public String Status { get; set; }
        @AuraEnabled public List<BenefitWrapper> benefits { get; set; }

        public CarePlanWrapper(Id carePlanId, String name, Date startDate, Date endDate, String status, List<BenefitWrapper> benefits) {
            this.carePlanId = carePlanId;
            this.Name = name;
            this.StartDate = startDate;
            this.EndDate = endDate;
            this.Status = status;
            this.benefits = benefits;
        }
    }

    // Wrapper class for benefits
    public class BenefitWrapper {
        @AuraEnabled public Id benefitAssignmentId { get; set; }
        @AuraEnabled public String BenefitName { get; set; }
        @AuraEnabled public String ProgramName { get; set; }
        @AuraEnabled public String Status { get; set; }
        @AuraEnabled public String BenefitTypeName { get; set; }  // BenefitType Name

        public BenefitWrapper(Id benefitAssignmentId, String benefitName, String programName, String status, String benefitTypeName) {
            this.benefitAssignmentId = benefitAssignmentId;
            this.BenefitName = benefitName;
            this.ProgramName = programName;
            this.Status = status;
            this.BenefitTypeName = benefitTypeName;
        }
    }
}