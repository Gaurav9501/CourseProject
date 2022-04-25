import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";


export class ShoppingListService{

  private ingredients = [new Ingredient('Salt', 102), new Ingredient('Tomato', 29)];

  ingredientsChanged = new EventEmitter<Ingredient[]>();


  getIngridient(){
    this.ingredients.slice();
  }


  addIngredient(data: Ingredient){
    console.log(`adding: ${data.name} ${data.amount}`);
    this.ingredients.push(data);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addAllIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
