public without sharing class BuildingUnitOnboardingController {

    @AuraEnabled(cacheable=true)
    public static String getFieldSetFields(String objectName, String fieldSetName) {
        Schema.SObjectType sObjectType = Schema.getGlobalDescribe().get(objectName);
        if (sObjectType == null) {
            throw new AuraHandledException('Invalid object name: ' + objectName);
        }

        Schema.FieldSet fieldSet = sObjectType.getDescribe().fieldSets.getMap().get(fieldSetName);
        if (fieldSet == null) {
            throw new AuraHandledException('Invalid field set name: ' + fieldSetName);
        }

        List<Map<String, Object>> fields = new List<Map<String, Object>>();
        for (Schema.FieldSetMember fsm : fieldSet.getFields()) {
            Map<String, Object> field = new Map<String, Object>();
            field.put('apiName', fsm.getFieldPath());
            field.put('label', fsm.getLabel());
            field.put('required', fsm.getRequired());
            field.put('type', fsm.getType());
            fields.add(field);
        }
		
        return JSON.serialize(fields);
    }

    @AuraEnabled(cacheable=false)
    public static Id createBuilding(Map<String, Object> buildingFields) {
        Building__c building = new Building__c();
        for (String fieldName : buildingFields.keySet()) {
            building.put(fieldName, buildingFields.get(fieldName));
        }

        try {
            insert building;
            return building.Id;
        } catch (Exception ex) {
            throw new AuraHandledException('Error creating building: ' + ex.getMessage());
        }
    }

    @AuraEnabled(cacheable=false)
    public static List<Id> createUnits(List<Map<String, Object>> unitsToCreate) {
        List<Unit__c> units = new List<Unit__c>();
        
        for (Map<String, Object> unitFields : unitsToCreate) {
            Unit__c unit = new Unit__c();
            for (String fieldName : unitFields.keySet()) {
                unit.put(fieldName, unitFields.get(fieldName));
                unit.Status__c = 'Vacant';
            }
            units.add(unit);
        }

        try {
            insert units;
            List<Id> unitIds = new List<Id>();
            for (Unit__c unit : units) {
                unitIds.add(unit.Id);
            }
            return unitIds;
        } catch (Exception ex) {
            throw new AuraHandledException('Error creating units: ' + ex.getMessage());
        }
    }

     @AuraEnabled(cacheable=true)
    public static List<SObject> findRecords(String searchKey, String objectName) {
        String sanitizedSearchKey = '%' + String.escapeSingleQuotes(searchKey) + '%';
        String query = 'SELECT Id, Name FROM ' + objectName + ' WHERE Name LIKE :sanitizedSearchKey LIMIT 5';
        
        try {
            return Database.query(query);
        } catch (Exception e) {
            // Handle any exceptions or errors here
            throw new AuraHandledException('Error executing query: ' + e.getMessage());
        }
    }
}