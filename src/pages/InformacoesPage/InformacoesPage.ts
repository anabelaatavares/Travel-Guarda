import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-InformacoesPage',
  templateUrl: 'InformacoesPage.html'
})
export class InformacoesPage {


  constructor(public navCtrl: NavController, public http: Http) {
  
  }
  
}