import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Adding the router module -> angular docs
import { Routes, RouterModule } from '@angular/router';

import { CraftingComponent } from './crafting/crafting.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
{path: 'home',component: HomeComponent},
{path: 'crafting', component: CraftingComponent },
{path: "", redirectTo: "home", pathMatch: "full"}, // when the site opens we redirect to the home page straight away
{path: 'locations', component: LocationComponent },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//Location 1: HOME
// Inventory:
// - Hammer 
// - Cape
// Craft items:
// - Hammer with Cape (ingredients: hammer and cape)
// Armand Pretorius10:47
// Location 2: OFFICE
// Inventory:
// - Shield
// - Glasses
// Craft items:
// - Shield with glasses (ingredients: glasses and shield)
// - Glasses with a shield (ingredients: glassas and shield)

// * INVENTORY IS DIFFERENT IN EACH LOCATION
// * CRAFT ITEMS ARE DIFFERENT IN EACH LOCATION
// * EACH CRAFT ITEM IS ONLY USING THE INVENTORY OF THAT SPECIFIC LOCATION OF THE ITEM