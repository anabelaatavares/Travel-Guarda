import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CategoriesPage } from "../category/category";
import { MapPage } from "../map/map";
import { Http } from "@angular/http";
import { NavController } from "ionic-angular";
import { AllPages } from "../AllPages/AllPages";
import { GuardaPage } from "../GuardaPage/GuardaPage";
import { InformacoesPage } from "../InformacoesPage/InformacoesPage";

@Component({
  templateUrl: 'tabsGuarda.html'
})
export class TabsPageGuarda {
  categories: any

  tab1Root = GuardaPage;
  tab2Root = InformacoesPage;

  constructor(public navCtrl: NavController, public http: Http) {
  }

}
