import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetialComponent } from './hero-detial/hero-detial.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { BracketComponent } from './bracket/bracket.component';
import { BuiltInComponent } from './built-in/built-in.component';

const routes: Routes = [ /**configuration router */
  { path: 'heroes', component: HeroesComponent },
  { path: 'message', component: MessageComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, /**default request */
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetialComponent }, /**is is a part of url */
  { path: 'event-binding', component: EventBindingComponent},
  { path: 'bracket', component: BracketComponent},
  { path: 'built-in', component: BuiltInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], /**initialize and start router */
  exports: [RouterModule] /**add router */
})
export class AppRoutingModule {}
