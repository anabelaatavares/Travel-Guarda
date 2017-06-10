import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { categoryPostPage } from "../categoryPost/categoryPost";

@Component({
  selector: 'page-categories',
  templateUrl: 'category.html'
})
export class CategoriesPage {
  categoryUrl = 'http://guardatravel.96.lt/wp-json/wp/v2/';
  categories: any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.loadPost();
  }

  itemSelected(category) {
    this.navCtrl.push(categoryPostPage, { post_data: category });
  }

  loadPost() {
    this.http.get(this.categoryUrl + 'categories?orderby=name').
      map(res => res.json()).subscribe(categories => {
        this.categories = categories;
        console.log(categories);
      }, (error) => {
        console.log('error', error);
      });
  }
}