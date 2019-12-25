import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { UiModule } from '../../ui/ui.module';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    Error404Component,
    Error500Component,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    Error404Component,
    Error500Component,
  ],
  imports: [
    UiModule,
    TranslateModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class ComponentsModule { }
