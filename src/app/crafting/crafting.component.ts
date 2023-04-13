import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl} from '@angular/forms';
import { VerifyService } from '../services/verify.service';
import { DbServService } from '../services/db-serv.service';
import { Materials } from '../models/materials';

@Component({
  selector: 'app-crafting',
  templateUrl: './crafting.component.html',
  styleUrls: ['./crafting.component.css']
})
export class CraftingComponent {

  constructor (private verify: VerifyService, private itemService: DbServService) {}

  value = ' clear me';

  // is user verified
  isVerified = false;

  hide = true;

  username = new FormControl("");
  password = new FormControl("");

  checkVerification() {
    this.verify.checkVerification(this.username.value!, this.password.value!).subscribe((response) => {
      if(response.success) {
        window.alert("Welcome " + this.username.value)
        this.isVerified = true
      } else {
        window.alert("Sorry something is wrong")
        this.isVerified = false
      }
    })
    
  }

  // CRUD FUNCTIONALITY
  items: Materials[] = []

  ngOnInit() {
    this.itemService.getAllItems().subscribe((data) => {
      this.items = data
    })
    
  }

  enteredSearchString: string = "";

  @Output()

  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    this.searchTextChange.emit(this.enteredSearchString);
  }
}
