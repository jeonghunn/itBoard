import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [ SidenavComponent ],
  imports: [
    CommonModule,
    MatListModule,
  ],
  exports: [
    SidenavComponent,
  ],
})
export class LayoutModule { }
