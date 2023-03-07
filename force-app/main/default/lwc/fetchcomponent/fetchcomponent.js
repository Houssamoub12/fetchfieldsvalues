import { LightningElement,api} from 'lwc';

export default class Fetchcomponent extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api flexipageRegionWidth;
}