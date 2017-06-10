import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CategoriesPage } from "../category/category";
import { MapPage } from "../map/map";
import { Http } from "@angular/http";
import { NavController } from "ionic-angular";
import { AllPages } from "../AllPages/AllPages";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  categories: any

  tab1Root = HomePage;
  tab2Root = AllPages;
  tab3Root = MapPage;

  constructor(public navCtrl: NavController, public http: Http) {
  }

}
