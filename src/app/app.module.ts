import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook/ngx';
firebase.initializeApp({
  apiKey: 'AIzaSyBa15FRhtfv3-uDMxBbRd5dXVe06oNSHMk',
    authDomain: 'champtown-1d507.firebaseapp.com',
    databaseURL: 'https://champtown-1d507.firebaseio.com',
    projectId: 'champtown-1d507',
    storageBucket: 'champtown-1d507.appspot.com',
    messagingSenderId: '534733508666',
    appId: '1:534733508666:web:c14a8b1b52cfa8e70a2503',
    measurementId: 'G-9YRL7LB54V'
});
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
