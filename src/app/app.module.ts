import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesIteamComponent } from './recipes/recipes-list/recipes-iteam/recipes-iteam.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingAddedComponent } from './shopping-list/shopping-added/shopping-added.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {AppRounting} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,HeaderComponent, RecipesComponent, RecipesListComponent, RecipesDetailsComponent, RecipesIteamComponent, ShoppingListComponent, ShoppingAddedComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRounting
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
