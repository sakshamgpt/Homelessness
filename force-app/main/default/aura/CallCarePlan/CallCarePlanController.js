({
    handleStatusWorking : function(component, event, helper) {
        var actionAPI = component.find("qaAPI");
        //Assign Quick Action field values
        var fields = {Name: {value: "Ready for Placement"},
                      Description:{value:"test"}};
        
        
        //Quick Action with target field values
            var args = {actionName: "CarePlan.ApplyCarePlanTemplateAction", entityName: "CarePlan", targetFields: fields};
        actionAPI.setActionFieldValues(args).then(function(){
            actionAPI.invokeAction(args);
        }).catch(function(e){
            console.error(e.errors);
        });
    },
     
    handleStatusEscalated : function(component, event, helper) {
        var actionAPI = component.find("qaAPI");
        //Assign Quick Action field values
        var fields = {Status: {value: "Assigned Placement"}};
        //Quick Action with target field values
        var args = {actionName: "Case.Update_Case_Status", entityName: "Case", targetFields: fields};
        actionAPI.setActionFieldValues(args).then(function(){
            actionAPI.invokeAction(args);
        }).catch(function(e){
            console.error(e.errors);
        });
    }
})