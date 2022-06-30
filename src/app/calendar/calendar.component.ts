import {Component, OnInit} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss']
})

export class CalendarComponent implements OnInit {

  options: any;

  calendarOptions: CalendarOptions = {initialView: 'dayGridMonth'};

  constructor() {

  }

  ngOnInit() {
    this.options = {
        initialDate : '2019-01-01',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true,
        selectable:true,
        selectMirror: true,
        dayMaxEvents: true
    };
  }
}
