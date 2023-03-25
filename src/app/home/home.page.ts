import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scanData: string;
  constructor(private barcodeScanner: BarcodeScanner) {}
  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scanData = barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
