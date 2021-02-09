import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChildProcessModule } from 'ngx-childprocess';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ItboardComponent } from './itboard/itboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ItboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    AppRoutingModule,
    NgxChildProcessModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
