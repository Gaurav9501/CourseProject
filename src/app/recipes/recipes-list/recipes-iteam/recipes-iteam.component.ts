import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipes-iteam',
  templateUrl: './recipes-iteam.component.html',
  styleUrls: ['./recipes-iteam.component.css']
})
export class RecipesIteamComponent implements OnInit {

 @Input() recipe: any;
 @Input() imageSrc: any;

 onSelected(){
   console.log('Recipie Selected'+this.recipe);
   this.recipeservice.recipeSelected.emit(this.recipe);
 }
  constructor(private recipeservice: RecipeService ) { }

  ngOnInit(): void {
  }

}
