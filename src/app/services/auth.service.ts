import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
  constructor(
    private fb: Facebook,
    private router: Router,
  ) { }

  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  logout() {
    firebase.auth().signOut();
  }
  getActiveUser() {
    return firebase.auth().currentUser;
  }
  isUserLogin() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.router.navigateByUrl('home/tabs/tab1');
      }
    });
  }

  loginWithFacebook() {
  return this.fb.login(['email'])
  .then((res: FacebookLoginResponse) => {
  // tslint:disable-next-line: variable-name
  const credential_fb = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
  return firebase.auth().signInWithCredential(credential_fb);
  console.log('Logged into Facebook!', res); })
  .catch(e => console.log('Error logging into Facebook', e));
  }

  loginWithgoogle() {
   return firebase.auth().signInWithPopup(new  firebase.auth.GoogleAuthProvider());
  }

  getUserDetail(userid: any) {
    this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
      .then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
  }

}
