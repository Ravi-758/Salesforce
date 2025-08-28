import { LightningElement,api } from 'lwc';

export default class ClockDropDown extends LightningElement {
    @api label=''
    @api options = []
    @api uniquesId = ''

    changeHandler(event){
        this.callParent(event.target.value)
        console.log(this.label)
        console.log(event.target.value)
    }

    callParent(value){
       this.dispatchEvent(new CustomEvent('optionHandler',{
            detail:{
                label:this.label,
                value:value
            }
        }))
    }

}