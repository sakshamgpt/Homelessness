import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class HomelessnessWeb extends NavigationMixin(LightningElement) {
    @api recordId;

    carePlanInfo = `Create a Care Plan. The Care Plan is meant to capture a high level path to achieve for you client and clients household. For example, maybe the high level plan is to Secure Long-Term Housing. This Care Plan will set the stage for what program Benefits can be assigned and what specifc goals need to be achieved.`;
    benefitsInfo = `Assign your client to a program Benefit. The program benefits are predetermined service offerings by the organization, for example: Housing Choice Voucher or Community Development Block Grant. By assigning the Benefit, you can proceed to the next step.`;
    goalsInfo = `Each program Benefit has associated goals that need to be met. Based on your selected Benefit, identify the specific Goal(s) expected to be fulfilled. For example: If the Benefit selected is Housing Choice Voucher, then the specific Goals can include "Apply for Housing Choice Voucher Program".`;

    handleCreateCarePlan() {
        // Navigate to the new Care Plan creation screen with default field values
        console.log()
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'CarePlan',
                actionName: 'new'
            },
            state: {
                
                defaultFieldValues : `CaseId=${this.recordId}`
            }
        });
    }

    handleCreateBenefit() {
        // Navigate to the new Care Plan creation screen with default field values
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'BenefitAssignment',
                actionName: 'new'
            },
            state: {
            }
        });
    }

    handleCreateGoal() {
        // Navigate to the new Care Plan creation screen with default field values
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Goal__c',
                actionName: 'new'
            },
            state: {
                defaultFieldValues : `Case__c=${this.recordId}`
            }
        });
    }
}