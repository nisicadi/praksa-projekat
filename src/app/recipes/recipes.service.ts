import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  url = 'https://localhost:44346/api/recipes';

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.url}`);
  }
  getRecipe(id: number): Observable<Recipe>{
    return this.http.get<Recipe>(`${this.url}/${id}`);
  }

  deleteRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.url}/${recipe.recipeId}`);
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.url}`, recipe);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.url}/${recipe.recipeId}`, recipe);
  }
}
