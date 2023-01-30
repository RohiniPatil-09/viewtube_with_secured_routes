import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips-bar',
  templateUrl: './chips-bar.component.html',
  styleUrls: ['./chips-bar.component.css']
})
export class ChipsBarComponent implements OnInit {

  constructor() { }
  chips = ['All','Electronics', 'Computers', 'Mechanics', 'Aeronautics', 'Metallurgy'];
  ngOnInit(): void {
  }


}
