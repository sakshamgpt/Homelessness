public with sharing class getRelatedCarePlansBenefits {
    @AuraEnabled(cacheable=true)
    public static String getParentAccount(Id caseId) {
        
      
       

        Case c = new Case();
        c = [SELECT Id, CaseNumber, AccountId FROM Case WHERE Id =: caseId];
        Account account = new Account();
        account = [SELECT Id, Name FROM Account WHERE Id =: c.AccountId];
        String accountName = account.Name;
        
        return accountName;
    }

    @AuraEnabled(cacheable=true)
    public static List<AccountWrapper> getRelatedRecords(Id caseId) {
        List<AccountWrapper> accountData = new List<AccountWrapper>();
        
        Set<Id> personaccountIds = new Set<Id>();

         //Query related Case Participants
         List<CaseParticipant> caseparticipants = [SELECT Id, Name, Role, CaseId,ParticipantId, Participant_Name__c FROM CaseParticipant WHERE CaseId =: caseId];
         

        for(CaseParticipant cps : caseparticipants){
            personaccountIds.add(cps.ParticipantId);
        }

        List<Account> personaccounts = new List<Account>();
        personaccounts = [SELECT Id, Name,(SELECT Id, Name, Status, BenefitId,Benefit.Name ,ProgramEnrollmentId, ProgramEnrollment.Name FROM BenefitAssignmentAccounts), (SELECT Id, Name, StartDate, EndDate, Status FROM CarePlanParticipants WHERE CaseId = :caseId) FROM Account WHERE Id IN :personaccountIds];
        for (Account acc : personaccounts) {
            List<CarePlanWrapper> careplanWrappers = new List<CarePlanWrapper>();
            for (CarePlan c : acc.CarePlanParticipants) {
                careplanWrappers.add(new CarePlanWrapper(c.Name, c.StartDate, c.EndDate, c.Status));
            }

            List<BenefitWrapper> benefitWrappers = new List<BenefitWrapper>();
            for (BenefitAssignment b : acc.BenefitAssignmentAccounts) {
                benefitWrappers.add(new BenefitWrapper(b.Benefit.Name, b.ProgramEnrollment.Name, b.Status));
            }
            
            accountData.add(new AccountWrapper(acc.Id, acc.Name, careplanWrappers, benefitWrappers));
        }
        return accountData;
    }

    public class AccountWrapper {
        @AuraEnabled public String Id { get; set; }
        @AuraEnabled public String Name { get; set; }
        @AuraEnabled public List<CarePlanWrapper> careplans { get; set; }
        @AuraEnabled public List<BenefitWrapper> benefitassignments { get; set; }
        
        public AccountWrapper(String accountId, String Name, List<CarePlanWrapper> acccareplans, List<BenefitWrapper> accbenefitassignments) {
            this.Id = accountId;
            this.Name = Name;
            this.careplans = acccareplans;
            this.benefitassignments = accbenefitassignments;
        }
    }

    public class CarePlanWrapper {
        @AuraEnabled public String Name { get; set; }
        @AuraEnabled public DateTime StartDate { get; set; }
        @AuraEnabled public DateTime EndDate { get; set; }
        @AuraEnabled public String Status { get; set; }
        
        
        public CarePlanWrapper(String name, DateTime StrtDate, DateTime endDate, String status) {
            this.Name = name;
            this.StartDate = StrtDate;
            this.EndDate = endDate;
            this.Status = status;
            
        }
    }

    public class BenefitWrapper {
        
        @AuraEnabled public String BenefitName { get; set; }
        @AuraEnabled public String ProgramName { get; set; }
        @AuraEnabled public String Status { get; set; }
        
        public BenefitWrapper(String benefitName, String programName, String status) {
            this.BenefitName = benefitName;
            this.ProgramName = programName;
            this.Status = status;
            
        }
    }
}