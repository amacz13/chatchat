import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './routes/home-page/home-page.component';
import {SettingsComponent} from './components/settings/settings.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
