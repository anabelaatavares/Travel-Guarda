import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';

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
import { searchPage } from "../pages/searchPage/search-page";



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
    CategoriesPage,
    categoryPostPage,
    GuardaPage,
    InformacoesPage,
    TabsPage,
    TabsPageGuarda, 
    searchPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(searchPage),
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
    CategoriesPage,
    categoryPostPage,
    GuardaPage,
    InformacoesPage,
    TabsPage,
    TabsPageGuarda,
    searchPage
  ],
  providers: [
    Storage,
    StatusBar,
    SplashScreen,
    Geolocation,
    SinglepostPage,
    searchPage,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
