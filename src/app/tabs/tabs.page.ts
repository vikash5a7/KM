import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private navController: NavController,
  ) {}

  public appPages = [
    {
      title: 'Home',
      url: '',
      icon: 'home'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];

  logout() {
    firebase.auth().signOut().then(() => {
      this.navController.navigateRoot('login'); }
    );
  }
}
