import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { mapLocationPostPage } from "../mapLocationPost/mapLocationPost";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { ListPage } from "../list/list";
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-singlepost',
  templateUrl: 'singlepost.html'
})
export class SinglepostPage {
  postId: any;
  post: any
  posts: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private alertController: AlertController) {
    this.post = navParams.get('post_data');
    console.log(this.post)
  }

  itemSelected(post) {
    this.navCtrl.push(mapLocationPostPage, { post_data: post.id });
  }

  save(val) {
    this.storage.get('myStore').then((data) => {
      if (data != null) {
        data.push(val);
        this.storage.set('myStore', data);
      }
      else {
        let array = [];
        array.push(val);
        this.storage.set('myStore', array);
      }
    });

    let alert = this.alertController.create({
      title: 'Favoritos',
      subTitle: val.title.rendered + ' adicionado ao Favoritos',
      buttons: ['OK']
    });

    alert.present();
  };


}