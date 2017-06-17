import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SinglepostPage } from '../../pages/singlepost/singlepost';
import { SearchPage } from "../searchPage/search-page";

@Component({
  selector: 'page-AllPages',
  templateUrl: 'AllPages.html'
})
export class AllPages {
  api_url = 'http://guardatravel.96.lt/wp-json/wp/v2/';
  posts: any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.loadPost();
  }

  itemSelected(post) {
    this.navCtrl.push(SinglepostPage, { post_data: post });
  }

  goToSecond() {
    this.navCtrl.push(SearchPage);
  }

  loadPost() {
    this.http.get(this.api_url + 'posts?orderby=title&order=asc&per_page=50')
      .map(res => res.json()).subscribe(posts => {
        this.posts = posts;
      }, (error) => {
        console.log('error', error);
      });
  }
}