import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { ItboardComponent } from './itboard/itboard.component';

const routes: Routes = [
  { path: '', component: ItboardComponent },
  { path: 'main', component: ItboardComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
