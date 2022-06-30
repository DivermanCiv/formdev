import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgSignaturePadOptions } from '@almothafar/angular-signature-pad';

@Component({
  selector: 'app-signature-panel',
  templateUrl: './signature-panel.component.html',
  styleUrls: ['./signature-panel.component.scss']
})
export class SignaturePanelComponent implements AfterViewInit {
  @ViewChild('signature')
  public signaturePad: any;

  @Output()
  onSign: EventEmitter<any> = new EventEmitter();

  hasDrawn = false;

  signaturePadOptions: NgSignaturePadOptions = { // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 500,
    canvasHeight: 300
  };

  constructor() { }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }


  drawComplete(event: MouseEvent | Touch) {
    this.hasDrawn = true;
  }

  erase() {
    this.signaturePad.clear();
    this.hasDrawn = false;
  }


  sendSignature() {
    this.onSign.emit({ signature: this.signaturePad.toDataURL(), closeDialog: true});
    this.signaturePad.clear();
  }
}
