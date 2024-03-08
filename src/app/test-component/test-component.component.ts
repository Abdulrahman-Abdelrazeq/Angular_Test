import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent implements OnInit{
  value!: number;

  constructor( private Service :MyServiceService) {
    this.initValue();
  }
  ngOnInit():void{
    this.Service.getname();
  }

  initValue() {
    this.value = 2;
  }
  clickButton(){
    this.value=3;
  }
}