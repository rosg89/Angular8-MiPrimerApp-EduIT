import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  nombre: string = 'Alex';
  edad: number = 28;
  sueldos: number  []= [1700, 1600, 1900];

  constructor() { }

  ngOnInit(): void {
  }

}
