public with sharing class CaseTreeController {
    @AuraEnabled(cacheable=true)
    public static List<Case> getCaseWithMembers(Id caseId) {
        return [SELECT Id, CaseNumber, 
                       (SELECT Id, Name FROM CaseParticipantCase),
                       (SELECT Id, Name FROM CarePlanCase)
                FROM Case
                WHERE Id = :caseId];
    }

    @AuraEnabled
    public static void createCarePlan(String name, Id participantId) {
        CarePlan newPlan = new CarePlan(Name = name, ParticipantId = participantId);
        insert newPlan;
    }
/*
    @AuraEnabled
    public static void createBenefit(String name, Id carePlanId) {
        Benefit newBenefit = new Benefit(Name = name, CarePlan__c = carePlanId);
        insert newBenefit;
    }*/
}