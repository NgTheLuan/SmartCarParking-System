import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { SharingService } from '../service/sharing.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayName: string = '';
  constructor(
    private user: UserService,
    private fauth: AuthService,
    private sharingService: SharingService
  ) {
    this.sharingService.isUserLoggedIn.subscribe((value) => {
      if (value) {
        this.user
          .getCurrentUser()
          .then((user) => {
            console.log(user);
            this.displayName =
              user.displayName != null ? user.displayName : user.email;
            console.log(this.displayName);
          })
          .catch((e) => console.log('Lỗi getCurrentUser'));
      } else {
        this.displayName = '';
      }
    });

    this.user
      .getCurrentUser()
      .then((user) => {
        this.displayName =
          user.displayName != null ? user.displayName : user.email;
        console.log(this.displayName);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  ngOnInit(): void { }

  Logout() {
    this.fauth.Logout().then((res) => {
      location.href = '/login';
    });
  }
}
