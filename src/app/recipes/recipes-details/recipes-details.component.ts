import { Component, OnInit, Input } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

 @Input() recipe: any;
  constructor(private recipieService: RecipeService) { }

  sendToShoppingList(){
    this.recipieService.addIngridentsToShoppingList(this.recipe.ingredients);
  }
  ngOnInit(): void {
  }

}
