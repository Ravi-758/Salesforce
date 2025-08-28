import { LightningElement } from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets';
export default class AlarmClockApp extends LightningElement {
    clockImage = AlarmClockAssests+'/AlarmClockAssets/clock.png';
    currentTime = `${hour}:${minutes}:${seconds} ${ampm}`
    hours = [];
    minutes =   [];
    meridiems = ['AM','PM'];
    alramTime
    isAlarmSet = false;
    isAlarmTriggered = false

    connectedCallback(){
        this.currectTimeHandler();
        this.createHoursOptions();
    }

    get isFieldNotSelected(){
        return !this.hourSelected && !this.minSelected && !this.meridiemSelected;
    }

    get shakeImage(){
        return this.isAlarmTriggered ? 'shake' : ''
    }

    currectTimeHandler(){

        setInterval(()=>{
             let date = new Date();
        let hours = dateTime.getHours();
        let minutes = dateTime.getMinutes();
        let seconds = dateTime.getSeconds();
        let ampm = "AM"

        if(hour == 0){
            hour = 12;
        }else if(hour > 12){
            hour = hour - 12;
            ampm = "PM";
        }
        hour = hour<10 ? "0"+hour : hour;
        minutes = minutes<10 ? "0"+minutes : minutes;
        seconds = seconds<10 ? "0"+seconds : seconds;
        //currentTime = `${hour}:${minutes}:${seconds} ${ampm}`
        if(this.alramTime === `${hour}:${minutes}:${seconds} ${ampm}`){
            console.log("alarm ringing")
            this.isAlarmTriggered=true
        }
        },1000)
        }
        createHoursOptions(){
            for(let i=1;i<=12;i++){
                let val = i<10 ? `0`+i:i;
                this.hours.push(val);
            }
        }
        createMinutesOptions(){
            for(let i=0;i<59;i++){  
                let val = i<10 ? `0`+i:i;
                this.minutes.push(val);
            }
        }
        optionhandler(event){
          const{label,value} = event.detail
          if(label=="Hour(s)"){
              this.hourSelected =value
          }else if(label == "Minute(s)"){
               this.minSelected = value;
          }else if(label==="AM/PM"){
                this.meridiemSelected = value
          }
        }
        setAlarmHandler(){
            this.alramTime = `${this.hourSelected}:${this.minSelected}:${this.meridiemSelected}`
            this.isAlarmSet= true
        }
        clearAlarmHandler(){
            this.alarmTime = ''
            this.isAlarmSet= false
            const elements = this.template.querySelectorAll('c-clock-dropdown')
            Arrayfrom(elements).forEach(element=>{
                element.reset("")
            })
        }
}