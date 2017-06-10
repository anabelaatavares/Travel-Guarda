import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SinglepostPage } from '../../pages/singlepost/singlepost';
import { CategoriesPage } from "../category/category";
import { categoryPostPage } from "../categoryPost/categoryPost";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  api_url = 'http://guardatravel.96.lt/wp-json/wp/v2/';
  posts: any;
  categ: any;

  tab1Root = CategoriesPage;

  constructor(public navCtrl: NavController, public http: Http) {
    this.loadPost();
    this.loadCats();
  }

  goToSecond() {
    this.navCtrl.push('searchPage');
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