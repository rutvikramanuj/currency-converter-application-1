import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent } from './components/converter/converter.component';
import { NavSectionComponent } from './components/nav-section/nav-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutSectionComponent } from './components/about-section/about-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    NavSectionComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
