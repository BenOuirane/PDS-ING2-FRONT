import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'protractor';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-favorite-filters',
  templateUrl: './favorite-filters.component.html',
  styleUrls: ['./favorite-filters.component.scss'], 
 // providers: [FilterService]
})
export class FavoriteFiltersComponent implements OnInit {
  @Input() type: string;
 // @Input() selectedFavoriteFilterChange: EventEmitter<Filter> = new EventEmitter;
//  @Input() searchFormService: SearchBarComponent

 // dialogFilterDeleteRef: MatDialogRef<DialogBoxComponent>;
  favoriteFilterFormGroup : FormGroup [];
  //favoriteFilters: Filter[] =[];
  constructor() { }

  ngOnInit() {
  //  this.selectedFavoriteFilterChange.emit(this.s)
  }

}
