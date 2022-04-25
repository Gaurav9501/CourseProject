import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
   constructor(private shoppinglistService: ShoppingListService) {
   }
  private recipes: Recipe[] = [
    new Recipe('Chicken', 'cooked properly', 'not available',
      [new Ingredient('Meat', 1), new Ingredient('Frech Fies', 20)]),
    new Recipe('Goat', 'cooked properly', 'not available',
      [new Ingredient('buns',2), new Ingredient('tomato', 1)
      ]),
    new Recipe('Goat', 'cooked properly', 'not available',
      [new Ingredient('Cheese', 1), new Ingredient('olives', 20)]),
  ];

  recipeSelected = new EventEmitter<Recipe>();


  getRecipes(){
    return this.recipes.slice();
  }

  addIngridentsToShoppingList(ingredients: Ingredient[]){
    this.shoppinglistService.addAllIngredients(ingredients);
  }




}
