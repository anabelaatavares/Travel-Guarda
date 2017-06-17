import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SinglepostPage } from "../singlepost/singlepost";


@Component({
  selector: 'page-categoryPost',
  templateUrl: 'categoryPost.html'
})
export class categoryPostPage {
  //api_url: 'http://guardatravel.96.lt/wp-json/wp/v2/posts?categories='
  categories: any
  posts: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.categories = navParams.get('post_data');
    console.log(this.categories);

    this.http.get('http://guardatravel.96.lt/wp-json/wp/v2/posts?categories=' + this.categories.id)
      .map(res => res.json()).subscribe(posts => {
        this.posts = posts;
      }, (error) => {
        console.log('error', error);
      });

  }

  itemSelected(post) {
    this.navCtrl.push(SinglepostPage, { post_data: post });
  }

}