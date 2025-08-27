import { LightningElement } from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets';
export default class AlarmClockApp extends LightningElement {
    clockImage = AlarmClockAssests+'/AlarmClockAssets/clock.png';
    currentTime = `${hour}:${minutes}:${seconds} ${ampm}`
    connectedCallback(){
        this.currectTimeHandler();
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
        },1000)
       

        }
}