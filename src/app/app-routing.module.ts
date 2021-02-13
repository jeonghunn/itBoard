import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { ItboardComponent } from './itboard/itboard.component';

const routes: Routes = [
  { path: '', component: ItboardComponent },
  { path: 'main', component: ItboardComponent },
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
