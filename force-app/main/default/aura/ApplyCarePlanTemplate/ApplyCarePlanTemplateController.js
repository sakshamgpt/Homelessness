({
    callCarePlanAction: function(component, event, helper) {
        var actionAPI = component.find("quickActionAPI");
        var caseRecordId = component.get("v.recordId");

        if (!caseRecordId) {
            console.error("Case Record ID is missing");
            return;
        }

        var args = {
            actionName: "Care_Plan__c.ApplyCarePlanTemplateAction", // The API name of the quick action on the Care Plan object
            targetRecordId: caseRecordId // Use the Case record ID as the context
        };

        actionAPI.invokeAction(args).then(function(result) {
            console.log("Quick Action invoked successfully");
        }).catch(function(e) {
            if (e.errors) {
                console.error("Error invoking quick action:", e.errors);
                // Handle errors here
            }
        });
    }
})