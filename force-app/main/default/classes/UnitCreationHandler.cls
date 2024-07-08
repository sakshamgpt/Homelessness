public class UnitCreationHandler {
    @InvocableMethod
    public static void createUnits(List<Request> requests) {
        List<Unit__c> unitsToInsert = new List<Unit__c>();

        for (Request req : requests) {
            Map<String, Object> additionalFieldsMap = (Map<String, Object>) JSON.deserializeUntyped(req.additionalFields);
            system.debug('additionalMap-->'+additionalFieldsMap);
            String buildingName = [SELECT Name FROM Building__c WHERE Id = :req.buildingId].Name;

            for (Integer i = 1; i <= req.numberOfUnits; i++) {
                Unit__c unit = new Unit__c();
                unit.Building__c = req.buildingId;

                // Set the unit name
                if (req.unitNameFormat != null && req.unitNameFormat != '') {
                    unit.Name = req.unitNameFormat.replace('{i}', String.valueOf(i));
                } else {
                    unit.Name = buildingName + ' Unit ' + i;
                }

                // Map additional fields dynamically
                for (String fieldName : additionalFieldsMap.keySet()) {
                    unit.put(fieldName, additionalFieldsMap.get(fieldName));
                }

                unitsToInsert.add(unit);
            }
        }

        if (!unitsToInsert.isEmpty()) {
            insert unitsToInsert;
        }
    }

    public class Request {
        @InvocableVariable(required=true)
        public String buildingId;

        @InvocableVariable(required=true)
        public Integer numberOfUnits;

        @InvocableVariable
        public String additionalFields; // JSON string representation of the map

        @InvocableVariable
        public String unitNameFormat; // Unit name format string
    }
}