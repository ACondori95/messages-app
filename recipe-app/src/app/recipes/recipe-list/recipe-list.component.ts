import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy-recipes&psig=AOvVaw1i2GTikcXV2657GIYwS6kS&ust=1671556014010000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMiju8WVhvwCFQAAAAAdAAAAABAE'
    ),
  ];
}
