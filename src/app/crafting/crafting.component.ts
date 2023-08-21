import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl} from '@angular/forms';
import { VerifyService } from '../services/verify.service';
import { DbServService } from '../services/db-serv.service';
import { Materials } from '../models/materials';
import { CraftService } from '../services/craft.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-crafting',
  templateUrl: './crafting.component.html',
  styleUrls: ['./crafting.component.css']
})
export class CraftingComponent {

  constructor (private verify: VerifyService, private itemService: DbServService, private craft: CraftService) {}

  // is user verified
  isVerified = false;
  isCrafting = false;

  hide = true;
  ShowPassword: any;
  show = false;

  username = new FormControl("");
  password = new FormControl("");

  // list of recipes variable
  Recipes: Recipe[]= []

  ngOnInit() {
    this.craft.getAllRecipes().subscribe((data) => {
      this.Recipes = data
      console.log(data)
    })
  }

  checkVerification() {
    this.verify.checkVerification(this.username.value!, this.password.value!).subscribe((response) => {
      if(response.success) {
        window.alert("Welcome " + this.username.value)
        this.isVerified = true
      } else {
        window.alert("Sorry your account or password is not valid")
        this.isVerified = false
      }
    })
    
  }

  

  searchTerm = '';
  // CRUD FUNCTIONALITY
  items: Materials[] = []

  
  enteredSearchString: string = "";

  @Output()

  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    this.searchTextChange.emit(this.enteredSearchString);
  }

  craftRecipe(recipeId : string){
    this.isCrafting = true;
      this.craft.craftRecipe(recipeId!).subscribe((response) => {
        this.isCrafting = false
        if(response.success){
          
        }
      })
    }
  }

