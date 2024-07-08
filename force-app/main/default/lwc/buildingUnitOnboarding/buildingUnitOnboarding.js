import { LightningElement, track } from 'lwc';
import getFieldSetFields from '@salesforce/apex/BuildingUnitOnboardingController.getFieldSetFields';
import createBuilding from '@salesforce/apex/BuildingUnitOnboardingController.createBuilding';
import createUnits from '@salesforce/apex/BuildingUnitOnboardingController.createUnits';
import findRecords from '@salesforce/apex/BuildingUnitOnboardingController.findRecords';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class BuildingUnitOnboarding extends LightningElement {
    @track showForm = false;
    @track showEmptyLookup = false;
    @track showLookup = false;
    @track showBuildingForm = false;
    @track showUnitForm = false;
    @track showSelection = true;
    @track buildingFields = [];
    @track buildingData = {};
    @track showSpinner = false; // Track spinner visibility
    @track selectedOption = '';
    @track message;
    @track recordsList;
    @track selectedRecordId;
    @track selectedValue;
    @track searchKey = "";
    @track iconName = "custom:custom16"
    @track lookupSpinner = false;
    @track buttonValue;
    @track fieldErrors; // New property to track error messages
    @track isCheckboxDisabled = false; // property to control the disabled state
    @track countUnit = false;
   
    numUnits = '';
    unitNameFormat = '';
    addUnits = false;
    allFieldsValid = false; // Track if all required fields are filled

    buildingOptions = [
        { label: 'Create new building', value: 'new' },
        { label: 'Existing building and wants to create units', value: 'existing' }
    ];

    connectedCallback() {
        // Load the field set data on component initialization

    }

    openForm() {


        this.showForm = true;
        this.showSelection = true;
    }

    closeForm() {
        this.resetForm();
        // this.loadBuildingFields();
        // this.showBuildingForm = false;
        // this.showUnitForm = false;
        // this.showForm = false;
        // this.showSelection = true;
        // this.selectedOption = ''; // Reset selected radio button option
    }

    loadBuildingFields() {
        this.showSpinner = true;
        getFieldSetFields({ objectName: 'Building__c', fieldSetName: 'Building_Onboarding' })
            .then(result => {
                // Parse the result into JSON
                this.buildingFields = JSON.parse(result);
                // Check each field to mark it as required if it's required in the field set
                this.buildingFields.forEach(field => {
                    if (field.apiName === 'Name' || field.apiName === 'FacilityLocation__Latitude__s' || field.apiName === 'FacilityLocation__Longitude__s') {
                        field.required = true;
                    }
                });
                console.log('buildingFields-->', JSON.stringify(this.buildingFields));
                this.showSpinner = false;
            })
            .catch(error => {
                this.showSpinner = false;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error loading fields',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }

    handleInputVerify(event) {
        const fieldName = event.target.dataset.field;
        const index = event.target.dataset.index;
        let value = event.target.value;

        const inputField = this.template.querySelector(`lightning-input-field[data-field=${fieldName}]`);

        if ((fieldName == 'FacilityLocation__Latitude__s') && (value < -90 || value > 90)) {
            this.buildingFields[index].error = 'Latitude should be a decimal number in a range [-90, 90]';
            try {
                inputField.classList.add('slds-has-error');
                
            } catch (err) {
                console.log('Error:', err);
            }

        } else if ((fieldName == 'FacilityLocation__Longitude__s') && (value < -180 || value > 180)) {
            this.buildingFields[index].error = 'Longitude should be a decimal number in a range [-180, 180]';
             try {
    
                inputField.classList.add('slds-has-error');
                
            } catch (err) {
                console.log('Error:', err);
            }
        } else if(fieldName == 'numUnits'){
                if(this.numUnits>10000){

                    this.countUnit = true;
                    this.allFieldsValid = false;
                    this.template.querySelector('.numberUnit').classList.add('slds-has-error')
                    return;
                }else{
                    this.countUnit = false;

                }
            
        }
        
        else {
            this.buildingFields[index].error = ""
             try {
                inputField.classList.remove('slds-has-error');
                
            } catch (err) {
                console.log('Error:', err);
            }
        }
        try {
            this.template.querySelector(`.${fieldName}`).classList.add('slds-m-left--xx-small');
        } catch (err) {
            console.log('error-->', err);
        }

    }

    handleInputChange(event) {
        const fieldName = event.target.dataset.field;
        const index = event.target.dataset.index;
        console.log('fieldName--->',fieldName);
        let value = event.target.value;
        console.log('value--->',value);
        
        if (fieldName === 'numUnits') {
           
                this.numUnits = event.target.value;
        } else if (fieldName === 'unitNameFormat') {
            this.unitNameFormat = event.target.value;
        } else if (fieldName === 'FacilityLocation__Latitude__s' || fieldName === 'FacilityLocation__Longitude__s') {
            value = parseFloat(value);


            this.buildingData[fieldName] = parseFloat(event.target.value);
            this.buildingFields[event.target.dataset.index].value = event.target.value;
        } else {
            this.buildingData[fieldName] = event.target.value;
            this.buildingFields[event.target.dataset.index].value = event.target.value;
        }

        this.validateAllFields(); // Validate all fields on input change
    }

    validateAllFields() {

        let isValid = true;
        console.log('buildingData--->', JSON.stringify(this.buildingData));
        console.log('buildingFields-->', JSON.stringify(this.buildingFields));
        this.buildingFields.forEach(field => {
            if (field.required && !this.buildingData[field.apiName]) {
                isValid = false;
            }

            else if (field.apiName === 'FacilityLocation__Latitude__s'){
                if(this.buildingData[field.apiName] < -90 || this.buildingData[field.apiName] > 90){
                    isValid = false
                }
            }else if( field.apiName === 'FacilityLocation__Longitude__s') {

                if(this.buildingData[field.apiName] < -180 || this.buildingData[field.apiName] > 180){
                    isValid = false;
            }
                
            }
        });

        this.allFieldsValid = isValid;
    }

    handleOptionChange(event) {
                    try{

            this.template.querySelector('.radioGroup').classList.remove('radioGroupError');
            }catch(err){
                console.log('error-->',err);
            }
        this.selectedOption = event.detail.value;
    }

    handleSelectionNext() {
        if (this.selectedOption === 'new') {
            try{

            this.template.querySelector('.radioGroup').classList.remove('radioGroupError');
            }catch(err){
                console.log('error-->',err);
            }
            
            this.showSelection = false;
            this.loadBuildingFields();
            this.showBuildingForm = true;
            
        } else if (this.selectedOption === 'existing') {
            try{

            this.template.querySelector('.radioGroup').classList.remove('radioGroupError');
            }catch(err){
                console.log('error-->',err);
            }
            //this.showUnitForm = true;
            this.showSelection = false;
           

            this.showEmptyLookup = true;
        }else{
            this.template.querySelector('.radioGroup').classList.add('radioGroupError');
             this.dispatchEvent(
            new ShowToastEvent({
                        title: 'Validation Error',
                        message: 'Please fill in all required fields',
                        variant: 'error'
                    })
             );
        }
         
        

    }

    handleNext(event) {

        if (event.target.dataset.value == "lookup") {
            this.showLookup = false;
        
            this.showUnitForm = true;
            this.addUnits = true;
            
            this.isCheckboxDisabled = true;
            this.buttonValue = "showLookup"
            

        } else {

            if (this.allFieldsValid) {
                this.showSpinner = true;
                setTimeout(() => {
                    this.showBuildingForm = false;
                    this.showUnitForm = true;
                    this.showSpinner = false;
                    console.log('in next building field-->', JSON.stringify(this.buildingFields));
                }, 500); // Simulate delay for spinner effect
            } else {
                // Display error message or handle validation state
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Validation Error',
                        message: 'Please fill in all required fields',
                        variant: 'error'
                    })
                );
            }
        }



    }

    onFocus() {
        this.lookupSpinner = true;
        console.log('on focus');
        this.getLookupResult();

    }

    onLeave() {

        console.log('leave')
    }

    removeRecordOnLookup() {
        this.onFocus();
        this.showLookup = false;
        this.selectedValue = '';
        this.selectedRecordId = "";
        this.showEmptyLookup = true;
    }

    handleKeyChange(event) {
        console.log('searchKey-->', this.searchKey);
        console.log('event-->', event.target.value)
        this.lookupSpinner = true;
        this.searchKey = event.target.value;
        this.getLookupResult();
    }
    getLookupResult() {
        findRecords({ searchKey: this.searchKey, objectName: 'Building__c' })

            .then((result) => {

                console.log('lookup result-->', JSON.stringify(result));
                if (result.length === 0) {

                    this.recordsList = [];

                    this.message = "No Records Found";

                } else {

                    this.recordsList = result;

                    this.message = "";

                }
                this.lookupSpinner = false;

                this.error = undefined;

            })

            .catch((error) => {

                this.error = error;
                this.lookupSpinner = false;

                this.recordsList = undefined;


            });

    }


    onRecordSelection(event) {

        this.selectedRecordId = event.target.dataset.key;

        this.selectedValue = event.target.dataset.name;

        this.searchKey = "";
        console.log('selectedRecordId-->', this.selectedRecordId);
        console.log('selectedValue-->', this.selectedValue);
        this.onSelecetedRecordUpdate();
    }
    onSelecetedRecordUpdate() {
        this.showLookup = true;
        this.showEmptyLookup = false;
    }
    handlePrevious(event) {
        console.log('data-value=>', event.target.dataset.value);
        if (this.showUnitForm) {
            if (event.target.dataset.value == "showLookup") {

                this.showUnitForm = false;
                this.addUnits = false;
                this.countUnit = false;
                this.numUnits = "";
                this.unitNameFormat = "";
                this.showLookup = true;
                this.buttonValue = "";
                this.isCheckboxDisabled = false;

            } else {
                
                this.showUnitForm = false;
                this.showBuildingForm = true;
            }

        } else if (this.showBuildingForm) {
            this.showBuildingForm = false;
            this.showSelection = true;
        } else if (this.showEmptyLookup) {

            this.showEmptyLookup = false;
            this.recordsList = undefined;
            this.showSelection = true;
        } else if (this.showLookup) {
            this.showLookup = false;
            this.selectedValue="";
            this.selectedRecordId = "";
            this.recordsList = undefined;
            this.showSelection = true;
        }
    }

    handleAddUnitsChange(event) {
                   
        this.addUnits = event.target.checked;
    }

    createData(buildingId) {
        console.log('selectedValue-->',this.selectedValue);

        console.log('Building Data pre-->',JSON.stringify(this.buildingData))
        if(this.selectedValue!="" && this.selectedValue!=undefined){
            this.buildingData.Name = this.selectedValue;
        }
        console.log('building data post-->',JSON.stringify(this.buildingData));
        let unitsToCreate = [];
        for (let i = 1; i <= parseInt(this.numUnits); i++) {
            let unitName = this.unitNameFormat
                ? this.unitNameFormat.replace('{i}', i)
                : `${this.buildingData.Name} Unit ${i}`;
            unitsToCreate.push({
                Name: unitName,
                Building__c: buildingId
            });
        }
        return createUnits({ unitsToCreate: unitsToCreate });
    }

    handleAddUnits() {
        console.log('allFieldsValid-->', this.allFieldsValid);
        console.log('event.target.dataset.value-->', event.target.dataset.value);
        
        if(this.addUnits && (!(this.numUnits)|| this.numUnits>10000)){
            // Display error message or handle validation state
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Validation Error',
                        message: 'Please fill in all required fields',
                        variant: 'error'
                    })
                );
        }
        
        else if (event.target.dataset.value == "showLookup") {
            let buildingId = this.selectedRecordId;
            this.showSpinner = true;
            this.createData(buildingId).then(res => {
                this.showSpinner = false;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Units created successfully',
                        variant: 'success'
                    })
                );
                this.resetForm();
            }).catch(error => {
                this.showSpinner = false;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: 'Error creating records: ' + error.body.message,
                        variant: 'error'
                    })
                );
            });

        } else {
            
            if (this.allFieldsValid) {
                this.showSpinner = true;
                createBuilding({ buildingFields: this.buildingData })
                    .then(buildingId => {
                        return this.createData(buildingId);
                    })
                    .then(() => {
                        this.showSpinner = false;
                        this.dispatchEvent(
                            new ShowToastEvent({
                                title: 'Success',
                                message: 'Building and Units created successfully',
                                variant: 'success'
                            })
                        );
                        this.resetForm();
                    })
                    .catch(error => {
                        this.showSpinner = false;
                        this.dispatchEvent(
                            new ShowToastEvent({
                                title: 'Error',
                                message: 'Error creating records: ' + error.body.message,
                                variant: 'error'
                            })
                        );
                    });
            }
            else {
                // Display error message or handle validation state
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Validation Error',
                        message: 'Please fill in all required fields',
                        variant: 'error'
                    })
                );
            }
        }









    }

    checkKeyUp() {
        console.log('Key up pressed')

    }

    resetForm() {
        this.showBuildingForm = false;
        this.showUnitForm = false;
        this.buildingData = {};
        this.numUnits = '';
        this.unitNameFormat = '';
        this.addUnits = false;
        this.showForm = false;
        this.showSelection = true;
        this.selectedOption = ''; // Reset selected radio button option
        this.allFieldsValid = false;
        this.recordsList = undefined;
        this.showEmptyLookup = false;
        this.showLookup = false;
        this.selectedValue = "";
        this.selectedRecordId = "";
        this.message = "";
        this.showSpinner = false;
        this.lookupSpinner = false;
        this.isCheckboxDisabled = false;
        this.countUnit = false;
        this.loadBuildingFields(); // Reload field set data after form reset
                    try{

            this.template.querySelector('.radioGroup').classList.remove('radioGroupError');
            }catch(err){
                console.log('error-->',err);
            }
    }
}