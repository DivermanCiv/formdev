
import {Component, OnInit} from '@angular/core'
import {Router} from "@angular/router";
import {ButtonModule} from 'primeng/button';



@Component({
  selector: 'app-emargement',
  templateUrl: './emargement.component.html',
  styleUrls: ['./emargement.component.scss']
})
export class EmargementComponent implements OnInit {

  

  constructor() { }


  ngOnInit(): void {
  }

  onClickQrCode(){
    alert('Click sur le bouton Qr')
  }

  onClickManuel(){
    return alert('Click sur le bouton manuel')

  }

  onClickMail(){
    alert('Click sur le bouton mail')
  }

}
