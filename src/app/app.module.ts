import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SinglepostPage } from "../pages/singlepost/singlepost"
import { CategoriesPage } from "../pages/category/category";
import { categoryPostPage } from "../pages/categoryPost/categoryPost";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapPage } from "../pages/map/map";
import { mapLocationPostPage } from "../pages/mapLocationPost/mapLocationPost"
import { TabsPage } from "../pages/tabs/tabs";
import { AllPages } from "../pages/AllPages/AllPages";
import { mapDirectionPostPage } from "../pages/mapDirectionPost/mapDirectionPost";
import { TabsPageGuarda } from "../pages/tabsGuarda/tabsGuarda";
import { GuardaPage } from "../pages/GuardaPage/GuardaPage";
import { InformacoesPage } from "../pages/InformacoesPage/InformacoesPage";
import { SearchPage } from "../pages/searchPage/search-page";
import { Network } from "@ionic-native/network";
import { mapDirectionRecomendadoPage } from "../pages/mapDirectionRecomendado/mapDirectionRecomendado";




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AllPages,
    ListPage,
    SinglepostPage,
    MapPage,
    mapLocationPostPage,
    mapDirectionPostPage,
    mapDirectionRecomendadoPage,
    CategoriesPage,
    categoryPostPage,
    GuardaPage,
    InformacoesPage,
    TabsPage,
    TabsPageGuarda,
    SearchPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AllPages,
    ListPage,
    SinglepostPage,
    MapPage,
    mapLocationPostPage,
    mapDirectionPostPage,
    mapDirectionRecomendadoPage,
    CategoriesPage,
    categoryPostPage,
    GuardaPage,
    InformacoesPage,
    TabsPage,
    TabsPageGuarda,
    SearchPage
  ],
  providers: [
    Storage,
    StatusBar,
    SplashScreen,
    Geolocation,
    Network,
    SinglepostPage,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
