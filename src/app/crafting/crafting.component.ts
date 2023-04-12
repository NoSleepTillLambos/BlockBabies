import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-crafting',
  templateUrl: './crafting.component.html',
  styleUrls: ['./crafting.component.css']
})
export class CraftingComponent {

  constructor (private verify: VerifyService) {}


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
        console.log("nope!!!!!!")
        this.isVerified = false
      }
    })
    
  }
}
