import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from "@angular/http";
import { SinglepostPage } from "../singlepost/singlepost";

declare var google;

@Component({
    selector: 'map-LocationPost',
    templateUrl: 'mapLocationPost.html'
})
export class mapLocationPostPage {
    postss: any;


    @ViewChild('map') mapElement: ElementRef;
    map: any;
    posts: any;
    post: any;
    api_url = 'http://guardatravel.96.lt/wp-json/wp/v2/';

    constructor(public navCtrl: NavController, private navParams: NavParams, public geolocation: Geolocation, public http: Http) {
        this.post = navParams.get('post_data');
        console.log(this.post);
        this.initMap();

    }


    initMap() {
        var options = { timeout: 10000, enableHighAccuracy: true };
        this.geolocation.getCurrentPosition(options).then((position) => {

            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

            this.loadPost();
           // this.loadPosts();

        }, (err) => {
            console.log(err);
        });
    }


    addMarker(info) {

        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(info.latitude, info.longitude),
            map: this.map,
            animation: google.maps.Animation.DROP,
        });

        //let content = "<h4>Information!</h4>";
        let content = "<h4>" + info.morada + "</h4>"

        this.addInfoWindow(marker, content);

    }

    addInfoWindow(marker, content) {

        let infoWindow = new google.maps.InfoWindow({
            content: content
        });

        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        });

    }

    loadPost() {
        this.http.get('http://guardatravel.96.lt/wp-json/wp/v2/posts/' + this.post)
            .map(res => res.json()).subscribe(posts => {
                this.posts = posts;
                //console.log(this.posts.acf);
                this.addMarker(this.posts.acf);
                // for (let i = 0; i < this.posts.length; i++) {
                //     //console.log(this.posts[i].acf.latitude);
                //     this.addMarker(this.posts[i].acf);
                // }
            }, (error) => {
                console.log('error', error);
            });
    }
}