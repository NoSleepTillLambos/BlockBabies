import { Component,EventEmitter,ViewEncapsulation, Output } from '@angular/core';
import { VerifyService } from '../services/verify.service';
import { DbServService } from '../services/db-serv.service';
import { RecipeService } from '../services/recipe.service';
import { Materials } from '../models/materials';
import { Recipe } from '../models/recipe';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LocationComponent {

  constructor (private verify: VerifyService, private itemService: DbServService, private recipeService: RecipeService) {}

  inventory: Materials[] = []
  recipes: Recipe[] = []
  // warriorItems : Materials[] = []

  ngOnInit() {
    this.itemService.getAllItems().subscribe((data) => {
      this.inventory = data
    })
    this.recipeService.getAllRecipes().subscribe((recipeData) => {
      this.recipes = recipeData;
    })
  }

  searchTerm = '';
  enteredSearchString: string = "";

  @Output()

  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    this.searchTextChange.emit(this.enteredSearchString);
  }
}
