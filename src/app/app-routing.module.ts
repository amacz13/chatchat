import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './routes/home-page/home-page.component';
import {SettingsComponent} from './components/settings/settings.component';
import {LoginScreenComponent} from './routes/login-screen/login-screen.component';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';


const routes: Routes = [
  {
    path: '',
    component: LoginScreenComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AngularFireAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
