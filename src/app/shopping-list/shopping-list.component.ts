import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model"
import {ShoppingListService} from "./shopping-list.service";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingservice: ShoppingListService) {
  }

  ingredients: any;

  ngOnInit(): void {
    this.ingredients = this.shoppingservice.getIngridient();
    this.shoppingservice.ingredientsChanged.subscribe((ingridents: Ingredient[]) => {
      this.ingredients = ingridents;
    });
  }


}
