global with sharing class populateMatchingUnitLookupValues implements Callable {
	global Object call(String action, Map<String, Object> args)
   {
       system.debug('######'+action);
       switch on action {
           when 'SelectOptions' {
               return SelectOptions((Map<String, Object>)args.get('input'), (Map<String, Object>)args.get('output'));
           }
       }
       return null;
    }
   
    private List<Map<String, Object>> SelectOptions(Map<String, Object> inputMap, Map<String, Object> outMap)
    {
       
        //String formatedselectedUnits;
        List<Id>selectedUitLst = new List<Id>();
         List<Map<String, Object>> optionList = new List<Map<String, Object>>();
          String Query = ' Select Id, Name from Unit__c WHERE Status__c=\'Vacant\'';
        if(inputMap.containsKey('BuildingId')){
            String buildingId = (String)inputMap.get('BuildingId');
            Query+= ' AND  Building__c=:buildingId';
           Map<String,Object>unitAssignemntMap = (Map<String,Object>)inputMap.get('UnitAssignment');
            if(unitAssignemntMap.containsKey('selectedUnits') ){
                String  selectedUnits = (String)unitAssignemntMap.get('selectedUnits');
                if(String.isNotBlank(selectedUnits) && selectedUnits!='null,' ){
                      system.debug('22232'+selectedUnits);
                selectedUitLst.addAll(selectedUnits.removeEnd(',').split(','));
                 system.debug('AAAA'+selectedUitLst);
                    Query+='AND Id Not IN:selectedUitLst';
                }
               
                
            }
          
           system.debug('QRY'+query); 
        for (Unit__c unitObj : database.query(Query))
        {
             Map<String, Object> option = new Map<String, Object>();
             option.put('name', unitObj.Id);
             option.put('value', unitObj.Name);
             optionList.add(option);
        }
        
        outMap.put('options', optionList);
        }
       
                
        return optionList;
    }
}