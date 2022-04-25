import {NgModel} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: RecipesComponent, pathMatch: 'full'},
  {path: 'recipe', component: RecipesComponent},
                        {path: 'shopping', component: ShoppingListComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRounting{}
