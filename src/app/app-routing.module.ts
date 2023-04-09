import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Adding the router module -> angular docs
import { Routes, RouterModule } from '@angular/router';

import { CraftingComponent } from './crafting/crafting.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [{path: 'home',component: HomeComponent},
{path: 'crafting', component: CraftingComponent, data: {animation: 'isRight'}},
{path: 'locations', component: LocationComponent},
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
