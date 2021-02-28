import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { LayoutModule } from 'src/app/layout/layout.module';
import { AboutComponent } from './about/about.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AboutComponent,
    SettingComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatExpansionModule,
  ],
})
export class PageModule { }
