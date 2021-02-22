import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [ SidenavComponent ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatRippleModule,
  ],
  exports: [
    SidenavComponent,
  ],
})
export class LayoutModule { }
