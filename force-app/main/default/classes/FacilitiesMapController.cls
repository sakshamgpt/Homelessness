global without sharing class FacilitiesMapController {
    public String permitLocation { get; set; }
    public String allOtherPermitLocations { get; set; }
    public String allOtherServices { get; set; }
    public String currentPageName { get; set; }
    public String concatenateUrl { get; set; }
    public String shelterFacilitiesHeader { get; set; } // Added
    
   
    public FacilitiesMapController() {
        
         // Query custom metadata
        List<Homelessness_Map__mdt> metadataRecords = [SELECT Building_Full_Occupied_Color__c,Header__c, Building_Halfway_Filled_Color__c, Building_Vacant_Color__c
                                                       FROM Homelessness_Map__mdt
                                                       LIMIT 1];
        
        
        shelterFacilitiesHeader = metadataRecords.isEmpty() ? 'Shelter Facilities' : metadataRecords[0].Header__c;
         
         String fullOccupiedColor = metadataRecords.isEmpty() ? 'rgb(0,0,0)' : metadataRecords[0].Building_Full_Occupied_Color__c;
        String halfwayFilledColor = metadataRecords.isEmpty() ? 'rgb(0,0,0)' : metadataRecords[0].Building_Halfway_Filled_Color__c;
        String vacantColor = metadataRecords.isEmpty() ? 'rgb(0,0,0)' : metadataRecords[0].Building_Vacant_Color__c;
        
        // Fetch the community name from custom metadata
       /** SObjectAccessDecision securityDcsn = Security.stripInaccessible(
            AccessType.READABLE,
            [SELECT Id, Name FROM Site WHERE Name = 'CSA_Resident_Portal' WITH SECURITY_ENFORCED]
        );
        Site s = (Site)securityDcsn.getRecords()[0];
        
        SObjectAccessDecision securityDsn = Security.stripInaccessible(
            AccessType.READABLE,
            [SELECT SecureURL 
             FROM SiteDetail 
             WHERE DurableId = :s.Id 
             WITH SECURITY_ENFORCED LIMIT 1]
        );
        SiteDetail sd = (SiteDetail) securityDsn.getRecords()[0]; **/
        
        String str = 'https://csahousingdev-dev-ed.develop.my.site.com/resident'; // sd.SecureURL;
        String str2 = 'Community';
        concatenateUrl = str + '/s/homelessness-client-detail?screeningsource=' + str2 + '&building=';
        
        List<LocationWrapper> allLocations = new List<LocationWrapper>();
        

        
       
        
        SObjectAccessDecision securityDecision = Security.stripInaccessible(
            AccessType.READABLE,
            [SELECT Name, Id,Occupancy_Percentage__c,Vacant_Beds__c, FacilityLocation__longitude__s, FacilityLocation__latitude__s FROM Building__c WITH SECURITY_ENFORCED LIMIT 50000]
        );
        List<Building__c> allProjectsWithLocations = (List<Building__c>) securityDecision.getRecords();
        
        List<String> services = new List<String>{ 'Shelters' };
        
        if (!allProjectsWithLocations.isEmpty()) {
            for (Building__c pj : allProjectsWithLocations) {
                LocationWrapper lw = new LocationWrapper();
                lw.baseURL = concatenateUrl;
                lw.Name = pj.Name;
                lw.latitute = pj.FacilityLocation__latitude__s;
                lw.longitude = pj.FacilityLocation__longitude__s;
                lw.View = pj.Id;
                lw.VacantBeds = pj.Vacant_Beds__c;
                
                // Determine color based on occupancy percentage
               if (pj.Occupancy_Percentage__c == null) {
                        // Default to full occupied if occupancy percentage is null
                        lw.Color = fullOccupiedColor;
                    }else if(pj.Occupancy_Percentage__c ==0 && pj.Vacant_Beds__c == 0){
                        lw.Color = fullOccupiedColor;
                    }
                    
                    else if (pj.Occupancy_Percentage__c >= 100) {
                        lw.Color = fullOccupiedColor;
                    } else if (pj.Occupancy_Percentage__c >= 50 && pj.Occupancy_Percentage__c < 100 && pj.Vacant_Beds__c !=0) {
                        lw.Color = halfwayFilledColor;
                    } else {
                        lw.Color = vacantColor;
                    }
                allLocations.add(lw);   
            }
        }
        
        allOtherPermitLocations = JSON.serialize(allLocations);
        allOtherServices = JSON.serialize(services);
        System.debug('allOtherPermitLocations: ' + allOtherPermitLocations);
    }
    
    public class LocationWrapper {
        public String Name;
        public Double latitute;
        public Double longitude;
        public String baseURL;
        public String View;
        public String Color;
        public Decimal VacantBeds;
    }
}