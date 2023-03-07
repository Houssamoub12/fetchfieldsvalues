import { LightningElement,api,track,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getFieldValue } from 'lightning/uiRecordApi';

 
export default class GetFieldsOfObjects extends LightningElement {
    @api objectApiName;
    objectNameToGetFields = '';
    @track lstFields =[];

    connectedCallback() {
        this.objectNameToGetFields = this.objectApiName;
    }
    
    @wire(getObjectInfo, { objectApiName: '$objectNameToGetFields' })    
    getObjectInfo({ error, data }) {
        if (data) {

            this.lstFields = [];
            for (let key in data.fields) {
                if (data.fields.hasOwnProperty(key)) {
                    this.lstFields.push({ value: key, label:key});
                }
            }
        }
        else if (error) {
            console.log('Error while get fields');
            this.lstFields = [];
        }
    }
}