import { SharingService } from './service/sharing.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { CheckComponent } from './check/check.component';
import { HistoryComponent } from './history/history.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

// import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageComponent } from './manage/manage.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainlayoutComponent,
    CheckComponent,
    HistoryComponent,
    AboutComponent,
    LoginComponent,
    FooterComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    FormsModule,
    // HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
