import { Component } from '@angular/core';
import { NavController, ModalController } from "ionic-angular";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SinglepostPage } from "../singlepost/singlepost";

@Component({
  templateUrl: 'search-page.html'
})
export class SearchPage {
  items: string[];
  posts: any;
  post: Array<any>;
  value = '';

  constructor(public navCtrl: NavController, public http: Http) {
    this.loadPost();

  }

  loadPost() {
    this.http.get('http://guardatravel.96.lt/wp-json/wp/v2/posts?per_page=100')
      .map(res => res.json()).subscribe(post => {
        this.post = post;
        console.log(this.post);
      }, (error) => {
        console.log('error', error);
      });
  }


  itemSelected(post) {
    this.navCtrl.push(SinglepostPage, { post_data: post });
  }

  getItems(q: string) {
    //this.loadPost();

    if (!q || q.trim() == '') {
      this.loadPost();
    } else {
      this.post = this.post.filter((v) => v.title.rendered.toLowerCase().indexOf(q.toLowerCase()) > -1);
    }


  }

}