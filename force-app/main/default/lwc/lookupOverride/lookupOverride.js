import { LightningElement,api,track } from 'lwc';
import OmnistudioLookup from 'omnistudio/omniscriptLookup';
import {OmniscriptBaseMixin} from 'omnistudio/omniscriptBaseMixin';
import temp from './lookupOverride.html';

export default class LookupOverride extends OmniscriptBaseMixin(OmnistudioLookup) {
    @track lookupDisplay='';
    @track selectedLst=[];
    // @api JsonDef = {};
    // @api omniJsonDef = {};
    connectedCallback(){
        this.required = true;
        super.connectedCallback();
       //console.log('####'+JSON.stringify(this.jsonDef));
        console.log('####'+JSON.stringify(this.jsonData));
        
    }
    setElementValue(json, bApi, bValidation){
       this.selectedLst = this.jsonData?.UnitAssignment?.selectedUnits;
        console.log('Selected Option'+JSON.stringify(this.selectedLst));

       // var temp = this.options.map(item=>{item.name!=json});
      
        
    }
    // selectOption(event){
     
    //     console.log('Selected Option'+JSON.stringify(this.lookupDisplay));
      
    //     // this.hasError=true;
    //     // this.errorMessage = 'Error Occured';
    //     this.checkValidity();
    //      this.reportValidity();
    //      this.hideOptions();
     
    // }
    render(){
        return temp;
    }
   
   
 
}