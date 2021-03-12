import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fauth: AngularFireAuth) { }
  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      var user = this.fauth.onAuthStateChanged(function (user) {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }
}
