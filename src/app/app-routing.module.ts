import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { ItboardComponent } from './itboard/itboard.component';
import { AboutComponent } from './page/about/about.component';
import { IntroPageComponent } from './page/intro-page/intro-page.component';
import { SettingComponent } from './page/setting/setting.component';
import { SignInComponent } from './page/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: ItboardComponent },
  { path: 'main', component: ItboardComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'intro', component: IntroPageComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
