// import export class from library
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetialComponent } from './hero-detial/hero-detial.component';
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { BracketComponent } from './bracket/bracket.component';

@NgModule({
  declarations: [
    // the component, directives, and pipes that belong to this NgModule
    AppComponent,
    HeroesComponent,
    HeroDetialComponent,
    MessageComponent,
    DashboardComponent,
    EventBindingComponent,
    BracketComponent
  ],
  imports: [
    // other modules whose exported classes are needed by component templates declared in thid NgModule
    BrowserModule, // when the browser refeshes, the app should work again.
    FormsModule, // need to use NgModule in component.html file
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [], // creators services, the become accessible in all part of the app
  bootstrap: [AppComponent], // the main (root) application view, call the root component , hosts all other app views
  exports: [] // subset of declarations that should be visible and usable in the component templates
})
export class AppModule {}
