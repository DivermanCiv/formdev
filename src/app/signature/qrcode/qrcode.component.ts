import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export default class QrcodeComponent implements OnInit {
  id: Observable<number> | undefined;
  data: any;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    if (this.route.parent) {
      this.route.parent.params.subscribe(params => {
        this.id = params['id'];
      });
    }
  }
}
