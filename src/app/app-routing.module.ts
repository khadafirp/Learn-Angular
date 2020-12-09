import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HeroesComponent } from '../app/heroes/heroes.component';
import { DetailComponent } from '../app/detail/detail.component';
import { TestingComponent } from '../app/testing/testing.component';
import { AppComponent } from '../app/app.component';

const routes: Routes = [
  {path: 'heroesPage', component: HeroesComponent},
  {path: 'detailPage', component: DetailComponent},
  {path: 'testingPage', component: TestingComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class AppRoutingModule { }
