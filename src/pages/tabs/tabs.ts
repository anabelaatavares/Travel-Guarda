import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CategoriesPage } from "../category/category";
import { MapPage } from "../map/map";
import { Http } from "@angular/http";
import { NavController, AlertController } from "ionic-angular";
import { AllPages } from "../AllPages/AllPages";
import { Network } from '@ionic-native/network';
import { mapDirectionRecomendadoPage } from "../mapDirectionRecomendado/mapDirectionRecomendado";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  categories: any

  tab1Root = HomePage;
  tab2Root = AllPages;
  tab3Root = MapPage;
  tab4Root = mapDirectionRecomendadoPage;

  constructor(public navCtrl: NavController, public http: Http) {
  }

}
