import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms'
;
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-studio-livestream',
  templateUrl: './studio-livestream.component.html',
  styleUrls: ['./studio-livestream.component.css']
})
export class StudioLivestreamComponent implements OnInit {

  constructor() { }
  liveStreamForm = new FormGroup({
    title: new FormControl('',[Validators.required,Validators.maxLength(100)]),
    startDate:new FormControl('',[Validators.required,this.startDateValidator]),
    startTime: new FormControl('',[Validators.required]), 
    endDate:new FormControl('',[Validators.required]),
    endTime: new FormControl('',[Validators.required]),
    eventDetails: new FormControl(''),
    guestEmail: new FormControl('',[Validators.email])
  } )
  get title(){
    return this.liveStreamForm.get('title');
  }
  get startDate(){
    return this.liveStreamForm.get('startDate');
  }
  get startTime(){
    return this.liveStreamForm.get('startTime');
  }
  get endDate(){
    return this.liveStreamForm.get('endDate');
  }
  get endTime(){
    return this.liveStreamForm.get('endTime');
  }
  get eventDetails(){
    return this.liveStreamForm.get('eventDetails');
  }
  get guestEmail(){
    return this.liveStreamForm.get('guestEmail');
  }
  startDateValidator(control: FormControl){
    // console.warn(control.value);
    let today = new Date();
    if(new Date(control.value) < today){
      return {startDateValidator: true}
    }
    else{
      return null;
    }
   
  }
  endDateValidator(control: FormControl){
    if(new Date(control.value) < new Date()){
      return {endDateValidator: true}
    }
    else{
      return null;
    }
  }
  timeTable=[
    '8AM',
    '9AM',
    '10AM',
    '7PM',
    '8PM',
    '9PM'
  ]
  confirm(){
    console.warn(this.liveStreamForm.value);
  }
  ngOnInit(): void {
    // console.warn(this.today);
    // console.warn(this.today.getFullYear())
    // console.warn(this.today.getMonth());
  }

  keywords: any[] = []
  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.push(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword() {
    this.keywords.pop();
  }
}
