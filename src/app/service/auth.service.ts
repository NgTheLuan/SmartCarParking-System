import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fauth: AngularFireAuth, private router: Router) { }

  //Tương tự viết hàm signin với tài khoản firebase như sau:
  loginFirebase(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.fauth.signInWithEmailAndPassword(email, password).then(
        (res) => {
          resolve(res);
          // this.sharingService.isUserLoggedIn.next(true);
        },
        (err) => reject(err)
      );
    });
  }

  Logout() {
    return new Promise<any>((resolve, reject) => {
      if (this.fauth.currentUser) {
        this.fauth.signOut();
        resolve('log out');
      } else {
        reject();
      }
    });
  }
}
