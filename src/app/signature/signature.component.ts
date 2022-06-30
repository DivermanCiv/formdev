import {Component, OnInit} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export default class SignatureComponent implements OnInit {
  data: any;

  constructor(
  ) {
    this.data = {
      labels: ['Absent', 'Présent', 'Non signé'],
      datasets: [
        {
          label: 'First Dataset',
          data: [4, 10, 3],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        },
      ]
    }
  }


  ngOnInit(): void {
  }
}
