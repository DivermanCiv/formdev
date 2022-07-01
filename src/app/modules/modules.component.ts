import {Component, OnInit} from '@angular/core';
import { CardModule } from 'primeng/card';
import { CalendarOptions, EventClickArg } from '@fullcalendar/angular';

@Component({
  selector: 'modules',
  templateUrl: 'modules.component.html',
  styleUrls: ['modules.component.scss']
})

export class ModulesComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    eventClick: (event) => this.handleEventClick(event),
    events: [
      { title: 'Développement front', date: '2022-06-28', end: '2022-07-01', backgroundColor: '#B03D28' },
      { title: 'DevOps', date: '2022-07-03', end: '2022-07-07', backgroundColor: '#7D605B'  },
      { title: 'Html CSS', date: '2022-07-10', end: '2022-07-14', backgroundColor: '#E34B94'  },
      { title: 'Python', date: '2022-07-16', end: '2022-07-20', backgroundColor: '#A6E686'  },
      { title: 'Gestion de projet', date: '2022-07-22', end: '2022-07-26', backgroundColor: '#85B028' },
      { title: 'Passage de l\'oral', date: '2022-07-28', end: '2022-08-01', backgroundColor: '#B03D28'  },
    ],
    editable: true
  };

  constructor() {

  }

  ngOnInit() {

  }


  handleEventClick(event: EventClickArg) {
    console.log(event);
    alert(event.event.title);
    event.event.setProp('background', '#ff5733')
  }
}
