import { ManageComponent } from './manage/manage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CheckComponent } from './check/check.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: MainlayoutComponent },
  { path: 'check', component: CheckComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'manage', component: ManageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
