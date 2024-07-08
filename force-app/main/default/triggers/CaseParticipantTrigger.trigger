trigger CaseParticipantTrigger on CaseParticipant (before insert, before update) {
    if(trigger.isBefore && trigger.isInsert){
        CaseParticipantTriggerHandler.isBeforeInsertUpdate(trigger.new);
    } else if(trigger.isBefore && trigger.isUpdate){
        CaseParticipantTriggerHandler.isBeforeInsertUpdate(trigger.new);
    }
}