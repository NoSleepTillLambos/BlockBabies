import { Component,EventEmitter,ViewEncapsulation, Output } from '@angular/core';
import { DbServService } from '../services/db-serv.service';
import { RecipeService } from '../services/recipe.service';
import { Materials } from '../models/materials';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-armies',
  templateUrl: './armies.component.html',
  styleUrls: ['./armies.component.css']
})
export class ArmiesComponent {

  constructor (private itemService: DbServService, private recipeService: RecipeService) {}

  inventory: Materials[] = [];
  recipes: Recipe[] = [];
  
  ngOnInit() {
    this.itemService.getAllItems().subscribe((data) => {
      this.inventory = data;
    })
    this.recipeService.getAllRecipes().subscribe((recipeData) => {
      this.recipes = recipeData;
    })
  }
}
