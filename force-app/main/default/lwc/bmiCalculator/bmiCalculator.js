import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = '';
    weight = '';

    inputHandler(event){
        const{name,value} = event.target;
        if(name === "height"){
            this.height = value;
        }
        if(name=== "weight"){
            this.weight=value
        }
    }

    submitHander(event){
        event.preventDefault();
        console.log(this.height,this.weight);
    }
}