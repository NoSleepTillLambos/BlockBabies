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

  value = 'clear me';

  // is user verified
  isVerified = false;

  hide = true;

  ShowPassword: any;

  show = false;

  

  onClick() {
    if (this.ShowPassword === 'password') {
      this.ShowPassword = 'text';
      this.show = true;
    } else {
      this.ShowPassword = 'password';
      this.show = false;
    }
  }

  username = new FormControl("");
  password = new FormControl("");

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

  ngOnInit() {
    this.itemService.getAllItems().subscribe((data) => {
      this.items = data
    })
    this.ShowPassword = 'password';
  }

  enteredSearchString: string = "";

  @Output()

  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    this.searchTextChange.emit(this.enteredSearchString);
  }
}
