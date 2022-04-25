import
{Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-added',
  templateUrl: './shopping-added.component.html',
  styleUrls: ['./shopping-added.component.css']
})
export class ShoppingAddedComponent implements OnInit {

 @ViewChild('nameInput') nameInputRef : any;
  @ViewChild('amountInput') amountInputRef: any ;

  constructor(private shoppinglist: ShoppingListService) {
  }

  AddItem(){
    this.shoppinglist.addIngredient(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
  }
  ngOnInit(): void {
  }

}
