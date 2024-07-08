public with sharing class CaseParticipantTriggerHandler {
    public static void isBeforeInsertUpdate(List<CaseParticipant> cps){
        List<Id> AccountIds = new List<Id>();
        for(CaseParticipant cp : cps){
            AccountIds.add(cp.ParticipantId);
        }
        SObjectAccessDecision securityDecision = Security.stripInaccessible(
            AccessType.READABLE,
            [SELECT Id, Name FROM Account WHERE Id IN :AccountIds WITH SECURITY_ENFORCED]
        );
        Map<Id, Account> Participants = new Map<Id, Account>((List<Account>) securityDecision.getRecords());
        for(CaseParticipant cp : cps){
            cp.Participant_Name__c = Participants.get(cp.ParticipantId)?.Name;
        }
    }
}