import { Component, OnInit } from '@angular/core';
import SignaturePad from "signature_pad";

@Component({
  selector: 'app-signature-panel',
  templateUrl: './signature-panel.component.html',
  styleUrls: ['./signature-panel.component.scss']
})
export class SignaturePanelComponent implements OnInit {

  constructor() {
  }

  canvas: any
  signaturePad: any

  async ngOnInit() {
    this.canvas = await document.querySelector("canvas");
    this.signaturePad = this.canvas === null ? null : new SignaturePad(this.canvas)
  }

  erase() {
    this.signaturePad?.clear()
  }

  validate() {
    console.log('hey')
  }




}
