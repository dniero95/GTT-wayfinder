import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectStopsFormComponent } from './components/select-stops-form/select-stops-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LinesInfoComponent } from './components/lines-info/lines-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectStopsFormComponent,
    NotFoundComponent,
    HomeComponent,
    LinesInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
