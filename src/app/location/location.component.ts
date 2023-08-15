import { Component,EventEmitter,ViewEncapsulation, Output } from '@angular/core';
import { VerifyService } from '../services/verify.service';
import { DbServService } from '../services/db-serv.service';
import { Materials } from '../models/materials';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LocationComponent {

  constructor (private verify: VerifyService, private itemService: DbServService) {}

  items: Materials[] = []

  ngOnInit() {
    this.itemService.getAllItems().subscribe((data) => {
      this.items = data
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
