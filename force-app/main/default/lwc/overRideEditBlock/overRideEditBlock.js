import { OmniscriptBaseMixin,api } from 'omnistudio/omniscriptBaseMixin';
import OmniscriptEditBlock from 'omnistudio/omniscriptEditBlock';
import tmp from './overRideEditBlock.html';
export default class OverRideEditBlock extends OmniscriptBaseMixin(OmniscriptEditBlock) {
    blockData;
    connectedCallback() {
        //intiate editblock connected call back
        super.connectedCallback();
        console.log('In Connected Call back');
    }

    save() {
      
        //get data in dit block 
        var existingBlockData = this.jsonData?.UnitAssignment?.Placement;
       
        var tmpMatchingUnits = [];//variable to store already selected matching units in edit block
        var tmpParticipants = []; //variable to store already selected participants in edit block
        var isNotValid = false;
        var isNotValidParticipant = false;
        /*Iterate over edit block arraya data and check if any
        matching unit or participant is selected multiple times*/
        if (Array.isArray(existingBlockData)) {
            existingBlockData.forEach(element => {
                if (tmpMatchingUnits.indexOf(element?.Lookup2) == -1) {
                    tmpMatchingUnits.push(element.Lookup2);
                } else {
                    isNotValid = true;
                }
                if (tmpParticipants.indexOf(element?.Lookup1) == -1) {
                    tmpParticipants.push(element.Lookup1);
                } else {
                    isNotValidParticipant = true;
                }
                //Set invalid attributes if any units or participant are selected morethan once
                this.omniApplyCallResp({
                    "isNotValid": isNotValid,
                    "isNotValidParticipant":isNotValidParticipant
                });
                
            });
        }
        var currentElement;
        if(Array.isArray(existingBlockData)){
            currentElement = existingBlockData[this.jsonDef.index];
           

        }else{
            currentElement = existingBlockData;
        }
        if(currentElement.Lookup1==null || currentElement.Lookup2==null){
            this.omniApplyCallResp({
                "requirederror": true
            });
            return;
        }else{
            if(isNotValid || isNotValidParticipant){
                this.isEditing = true;
                return;
            }else{
                this.omniApplyCallResp({
                    "requirederror": false
                });
                this.isEditing = false;
            }
           
           
        }
    }
    //Override edit method of standard edit block
    edit() {
        
        this.isEditing = true;
        var isvalidReset = this.jsonData?.isNotValid;
        var isNotValidParticipant = this.jsonData?.isNotValidParticipant;
        var isRequired = this.jsonData?.requirederror;
        if (isvalidReset || isNotValidParticipant || isRequired) {
            this.omniApplyCallResp({
                "isNotValid": false,
                "isNotValidParticipant":false,
                "requirederror":false
            });
        }

    }
    //override standard ecit block cancel method
    cancel(){
        
    var currentElementNew = this.jsonData?.UnitAssignment?.Placement;
    if(Array.isArray(currentElementNew)){
        currentElementNew = currentElementNew[this.jsonDef.index];
    }
    console.log(JSON.stringify(currentElementNew))
   
        var isvalidReset = this.jsonData?.isNotValid;
        var isNotValidParticipant = this.jsonData?.isNotValidParticipant;
        if((isvalidReset || isNotValidParticipant) ){
            console.log('IN 1');
            this.handleRemoveDom();
        }else if(currentElementNew == undefined ){
            console.log('IN 2');
            this.handleRemoveDom();
        }else if(currentElementNew.Lookup2==null && currentElementNew.Lookup1==null){
            console.log('IN 3');
            this.handleRemoveDom();
        }
       
        this.omniApplyCallResp({
            "isNotValid": false,
            "isNotValidParticipant":false,
            "requirederror":false
        });
        this.isEditing = false;
       

    }
    
   
}