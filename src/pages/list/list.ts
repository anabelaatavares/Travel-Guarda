import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from "@angular/http";
import { Storage } from '@ionic/storage';
import { mapDirectionPostPage } from "../mapDirectionPost/mapDirectionPost";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  placesService: any;
  post: any;
  items: any;
  i: any;
  favoriteList: Array<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public storage: Storage, public alertController: AlertController) {
    this.post = navParams.get('post_data');
    //console.log(this.post);
    this.getStorage();
  }

  itemSelected() {
    this.navCtrl.push(mapDirectionPostPage, { post_data: this.items });
  }

  getStorage() {
    this.storage.get('myStore').then((val) => {
      this.items = val;
      //console.log(this.items);  
    });
  }

  removeKeys(i) {
    console.log(i);
    for (this.i = 0; this.i < this.items.length; this.i++) {
      if (this.items[this.i] == i) {
        this.items.splice(this.items.indexOf(i, 1));
        localStorage.removeItem('myStore');
        this.storage.set('myStore', this.items);
      }
    }
    // 
    // this.items.splice(i, 1);
    // this.storage.set('myStore', this.items);
  }

  clearKeys() {
    this.storage.clear().then(() => {
      console.log('Keys have been cleared');
    });

    let alert = this.alertController.create({
      title: 'Favoritos',
      subTitle: 'Lista de Favoritos Limpa',
      buttons: ['OK']
    });

    this.items = [];
    this.storage.set('myStore', this.items);

    alert.present();
  }



}
