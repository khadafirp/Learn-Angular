import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
// import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeroesComponent } from '../app/heroes/heroes.component';
import {AppRoutingModule} from './/app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { TestingComponent } from './testing/testing.component';

// const routes: Routes = [
//   {path: 'SecondPage', component: HeroesComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetailComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    // RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
