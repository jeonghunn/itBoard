import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { AnnouncerComponent } from './announcer/announcer.component';

const routes: Routes = [
  { path: '', component: AnnouncerComponent },
  { path: 'main', component: AnnouncerComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
