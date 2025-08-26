import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = '';
    weight = '';
    bmiValue ='';
    result = '';
    inputHandler(event){
        const{name,value} = event.target;
        if(name === "height"){
            this.height = value;
        }
        if(name=== "weight"){
            this.weight=value
        }
    }

    submitHandler(event){
        event.preventDefault();
        console.log(this.height,this.weight);
        this.calculate();

    }
    calculate(){
        let height = Number(this.height);
        let bmi = Number(this.weight)/(height*height);
        console.log(bmi);
        this.bmiValue = Number(bmi.toFixed(2));

        if(this.bmiValue<18.5){
            this.bmiValue = 'Underweight';
        }else if(this.bmiValue>=18.5 && this.bmiValue<25){
            this.result = 'Normal';
        }else if(this.bmiValue>=25 && this.bmiValue<30){
            this.result = 'Overweight';
        }else {
            this.result = 'Obese';
        }
    }
    recalculate(){
        this.result = '';
        this.bmiValue = '';
        this.weight= '';
        this.height ='';
    }

}