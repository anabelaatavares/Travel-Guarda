import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from "@angular/http";
import { SinglepostPage } from "../singlepost/singlepost";

declare var google;

@Component({
    selector: 'map-DirectionPost',
    templateUrl: 'mapDirectionPost.html'
})
export class mapDirectionPostPage {


    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('directionsPanel') directionsPanel: ElementRef;
    map: any;
    post: any;
    ultimopost: any;

    constructor(public navCtrl: NavController, private navParams: NavParams, public geolocation: Geolocation, public http: Http) {
        this.post = navParams.get('post_data');
        console.log(this.post);
    }

    ionViewDidLoad() {

        this.loadMap();
        this.startNavigating();
    }


    loadMap() {
        var options = { timeout: 10000, enableHighAccuracy: true };
        this.geolocation.getCurrentPosition(options).then((position) => {

            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            //let latLng = new google.maps.LatLng(40.5333333,-7.2666667);

            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


        }, (err) => {
            console.log(err);
        });
    }

    startNavigating() {
        var options = { timeout: 10000, enableHighAccuracy: true };
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;

        var myLatlng = new google.maps.LatLng(parseFloat(this.post[this.post.length - 1].acf.latitude), parseFloat(this.post[this.post.length - 1].acf.longitude));
        //var myLatlng1 = new google.maps.LatLng(parseFloat(this.post[1].acf.latitude), parseFloat(this.post[1].acf.longitude));
        var waypts = [];
        for (let i = 0; i < this.post.length; i++) {
            //console.log(!(this.post.length - 1));
            if (!(this.post.length - 1) == false) {
                //console.log("lio");
                var myLatlngWaypoints = new google.maps.LatLng(parseFloat(this.post[i].acf.latitude), parseFloat(this.post[i].acf.longitude));
                waypts.push({ location: myLatlngWaypoints, stopover: true });
            }
        }

        this.geolocation.getCurrentPosition(options).then((position) => {

            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            console.log(latLng);
            directionsDisplay.setMap(this.map);
            directionsDisplay.setPanel(this.directionsPanel.nativeElement);
            directionsService.route({
                origin: latLng,
                destination: myLatlng,
                waypoints: waypts,
                travelMode: google.maps.TravelMode['WALKING']
            }, (res, status) => {

                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(res);
                } else {
                    console.warn(status);
                }

            });

        });
    }
}