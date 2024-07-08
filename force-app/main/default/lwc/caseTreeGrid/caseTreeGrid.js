import { LightningElement, api, wire, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import homelessnessResource from '@salesforce/resourceUrl/Homelessness_Resource';
import getRelatedRecords from '@salesforce/apex/CaseTreeGridController.getRelatedRecords';
import getParentAccount from '@salesforce/apex/CaseTreeGridController.getParentAccount';
import { getRecord } from 'lightning/uiRecordApi';
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";


export default class CaseTreeGrid extends NavigationMixin(LightningElement) {
    
    @track caseTreeData;
    @api recordId;
    error;
    objectApiName; // To store object API name
    @track isLoading = true;

    connectedCallback() {
        this.loadRelatedRecords();
    }

    @wire(getRecord, { recordId: '$recordId', fields: []})
    wiredRecord({ error, data }) {
        console.log('in wire')
        if (data) {
            console.log('hey');
            // Extract object API name from record data
            console.log('data-->',JSON.stringify(data));
            this.objectApiName = data.apiName;
            console.log('objName-->',this.objectApiName);
        } else if (error) {
            console.error('Error fetching record data:', error);
        }
    }

    renderedCallback(){
            console.log('objName in-->',this.objectApiName);
        
    }

    @wire(getParentAccount, { caseId: '$recordId' })
    wiredAccounts({ error, data }) {
        if (data) {
            console.log('data--->',JSON.stringify(data));

            this.parentaccountName = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }

    async loadRelatedRecords() {
        try {
            const result = await getRelatedRecords({ caseId: this.recordId });
            console.log('result--->',JSON.stringify(result));
            this.caseTreeData = result;
            this.isLoading = false;
        } catch (error) {
            this.isLoading = false
            console.error('Error loading related records', error);
            this.error = error;
        }
    }

    handleCreateCarePlan(event) {
        const participantId = event.target.dataset.participantId;
        // Implement logic to create care plan
    }

    handleCreateBenefit(event) {
        const carePlanId = event.target.dataset.carePlanId;
        // Implement logic to create benefit
    }

    handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.dataset.id);
    }

    handleDragOver(event) {
        event.preventDefault();
    }

    handleDrop(event) {
        event.preventDefault();
        const draggedId = event.dataTransfer.getData('text/plain');
        const targetId = event.target.dataset.id;
        // Implement logic to handle drop
    }

    

    navigateToRecord(event) {
        event.preventDefault();
        const recordId = event.target.dataset.id;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recordId,
                actionName: 'view'
            }
        });
    }

    createRecord(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
        const objectApiName = event.target.dataset.id;
        let defaultValues ={};
        if(objectApiName==='CaseParticipant'){
            defaultValues = encodeDefaultFieldValues({
            CaseId: this.recordId,
            
            });
        }else if(objectApiName ==='CarePlan'){
            console.log('ParticipantId-->',event.target.dataset.participantid);
            defaultValues = encodeDefaultFieldValues({
            CaseId: this.recordId,
            ParticipantId : event.target.dataset.participantid,
            });
        }else if(objectApiName==='BenefitAssignment'){
            console.log('ParentRecordId-->',event.target.dataset.parent);
            defaultValues = encodeDefaultFieldValues({
            ParentRecordId: event.target.dataset.parent,
           
            });
            // EnrolleeId: event.target.dataset.participantid
        }
        
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: objectApiName,
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValues,
            },
        });
    }
}