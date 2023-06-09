import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteCharacters: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  favoriteCharacters$ = this.favoriteCharacters.asObservable();

  constructor() { }

  getFavoriteCharacters(): any[] {
    return this.favoriteCharacters.getValue();
  }

  addFavoriteCharacter(character: any) {
    const currentFavorites = this.favoriteCharacters.getValue();
    const updatedFavorites = [...currentFavorites, character];
    this.favoriteCharacters.next(updatedFavorites);
  }

  removeFavoriteCharacter(characterId: number) {
    const currentFavorites = this.favoriteCharacters.getValue();
    const updatedFavorites = currentFavorites.filter(character => character.id !== characterId);
    this.favoriteCharacters.next(updatedFavorites);
  }

  isCharacterFavorite(characterId: number): boolean {
    const currentFavorites = this.favoriteCharacters.getValue();
    return currentFavorites.some(character => character.id === characterId);
  }
}
