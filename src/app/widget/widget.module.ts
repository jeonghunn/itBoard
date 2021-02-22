import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [ IntroComponent ],
  exports: [
    IntroComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    TranslateModule,
  ],
})
export class WidgetModule { }
