import { LightningElement, api, wire} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getRelatedRecords from '@salesforce/apex/getRelatedCarePlansBenefits.getRelatedRecords';
import getParentAccount from '@salesforce/apex/getRelatedCarePlansBenefits.getParentAccount';

const actions = [
    { label: 'View', name: 'view' },
    
];

const viewactions = [
    { label: 'View', name: 'accview' },
    
];

const CARE_PLAN_COLUMNS = [
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Start Date', fieldName: 'StartDate', type: 'date' },
    { label: 'End Date', fieldName: 'EndDate', type: 'date' },
    { label: 'Status', fieldName: 'Status', type: 'picklist' },
    {
        type: 'action',
        typeAttributes: { rowActions: actions },
    },
   
];

const BENEFIT_ASSIGNMENT_COLUMNS = [
    { label: 'Benefit', fieldName: 'BenefitName', type: 'text' },
    { label: 'Program', fieldName: 'ProgramName', type: 'text' },
    { label: 'Status', fieldName: 'Status', type: 'picklist' },
    {
        type: 'action',
        typeAttributes: { rowActions: actions },
    },
  
];

const CASE_PARTICIPANT_COLUMNS = [
    { label: 'Name', fieldName: 'Participant_Name__c', type: 'text' },
    { label: 'Role', fieldName: 'Role', type: 'text' },
    {
        type: 'action',
        typeAttributes: { rowActions: viewactions },
    },
    
];


export default class CaseTreelwc extends NavigationMixin(LightningElement) {

    activeSections = ['householdaccount', 'carePlans', 'benefitAssignments'];
    @api recordId;
    //carePlans;
    benefitAssignments;
    personaccounts = [];
    accounts = [];
    parentaccounts = [];
    caseparticipants = [];
    parentaccountName = '';
    carePlanColumns = CARE_PLAN_COLUMNS;
    benefitAssignmentColumns = BENEFIT_ASSIGNMENT_COLUMNS;
    caseparticipantColumns = CASE_PARTICIPANT_COLUMNS;

    connectedCallback() {
        this.loadRelatedRecords();
    }

    @wire(getParentAccount,{caseId: '$recordId'})
    wiredAccounts({ error, data }) {
        if (data) {
            this.parentaccountName = data;
            // console.log('Parent Account: ' + this.parentaccountName);
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }

    async loadRelatedRecords() {
        try {
            const result = await getRelatedRecords({ caseId: this.recordId });
            /*this.carePlans = result.carePlans;
            console.log('Care Plans: ' + this.carePlans);
            this.benefitAssignments = result.benefitAssignments;
            console.log('Benefit Assignments: ' + this.benefitAssignments);
            
            this.caseparticipants = result.caseparticipants;*/
            /*this.parentaccounts = result.accounts;
            this.parentaccountName = this.parentaccounts[0].Name;
            this.accounts = result.personaccounts.map(account => ({
                Name: account.Name,
                careplans : account.CarePlanParticipants,
                benefitassign : account.BenefitAssignmentAccounts
                
            }));*/
            this.personaccounts = result;
            // console.log('Person Account Data: ' + JSON.stringify(this.personaccounts));
        } catch (error) {
            console.error('Error loading related records', error);
        }
    }

   

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        // console.log('ParticipantId: ' + row.ParticipantId);
        switch (actionName) {
            case 'view':
                this.navigateToRecord(row.Id);
                break;
            case 'accview':
                this.navigateToRecord(row.ParticipantId);
            default:
                break;
        }
       
    }

    navigateToRecord(recordId) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recordId,
                actionName: 'view'
            }
        });
    }

}