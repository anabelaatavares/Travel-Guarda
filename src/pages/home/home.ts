import { Component } from '@angular/core';
import { NavController, Platform, Alert, ToastController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SinglepostPage } from '../../pages/singlepost/singlepost';
import { CategoriesPage } from "../category/category";
import { categoryPostPage } from "../categoryPost/categoryPost";
import { SearchPage } from "../searchPage/search-page";

declare var navigator: any;
declare var Connection: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  api_url = 'http://guardatravel.96.lt/wp-json/wp/v2/';
  posts: any;
  categ: any;

  tab1Root = CategoriesPage;

  constructor(public navCtrl: NavController, public http: Http, private platform: Platform, private toastCtrl: ToastController) {
    this.loadPost();
    this.loadCats();

    this.platform.ready().then(() => {
      var networkState = navigator.connection.type;
      var states = {};
      states[Connection.WIFI] = 'Conexão WiFi';
      states[Connection.CELL_3G] = 'Conexão 3G';
      states[Connection.CELL_4G] = 'Conexão 4G';
      states[Connection.NONE] = 'Não tem ligação à internet';


      if (states[Connection.NONE]) {
        let toast = this.toastCtrl.create({
          message: states[networkState] + ' efetuada',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      } else {
        let toast = this.toastCtrl.create({
          message: 'Não há ligação à internet',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
    });
  }

  goToSecond() {
    this.navCtrl.push(SearchPage);
  }

  itemSelected(post) {
    this.navCtrl.push(SinglepostPage, { post_data: post });
  }

  itemSelecteded(category) {
    this.navCtrl.push(categoryPostPage, { post_data: category });
  }

  itemPage() {
    this.navCtrl.push(CategoriesPage);
  }

  loadCats() {
    this.http.get('http://guardatravel.96.lt/wp-json/wp/v2/categories?per_page=3')
      .map(res => res.json()).subscribe(categ => {
        //console.log(posts);
        this.categ = categ;
      }, (error) => {
        console.log('error', error);
      });
  }

  loadPost() {
    this.http.get('http://guardatravel.96.lt/wp-json/wp/v2/posts?categories=9')
      .map(res => res.json()).subscribe(posts => {
        this.posts = posts;
        console.log(this.posts);
      }, (error) => {
        console.log('error', error);
      });
  }


}