import { LightningElement, api, wire, track } from 'lwc';
import getCaseWithMembers from '@salesforce/apex/CaseTreeController.getCaseWithMembers';
import createCarePlan from '@salesforce/apex/CaseTreeController.createCarePlan';
//import createBenefit from '@salesforce/apex/CaseTreeController.createBenefit';
import { refreshApex } from '@salesforce/apex';

export default class CaseTree extends LightningElement {
    @api recordId;
    @track caseTreeData;
    @track error;

    @wire(getCaseWithMembers, { caseId: '$recordId' })
    wiredCase({ error, data }) {
        if (data) {
            this.caseTreeData = data;
            console.log('Case Tree Data:', JSON.stringify(data));
            this.error = undefined;
        } else if (error) {
            this.error = error;
            console.error('Error:', error);
            this.caseTreeData = undefined;
        }
    }

    handleCreateCarePlan(event) {
        const participantId = event.target.dataset.participantId;
        const carePlanName = prompt('Enter Care Plan Name:');
        if (carePlanName) {
            createCarePlan({ name: carePlanName, participantId })
                .then(() => {
                    return refreshApex(this.caseTreeData);
                })
                .catch(error => {
                    this.error = error;
                });
        }
    }
/*
    handleCreateBenefit(event) {
        const carePlanId = event.target.dataset.carePlanId;
        const benefitName = prompt('Enter Benefit Name:');
        if (benefitName) {
            createBenefit({ name: benefitName, carePlanId })
                .then(() => {
                    return refreshApex(this.caseTreeData);
                })
                .catch(error => {
                    this.error = error;
                });
        }
    }*/
}