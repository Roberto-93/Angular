
import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {
  favoriteCharacters: any[] = [];

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.favoriteService.favoriteCharacters$.subscribe(favoriteCharacters => {
      this.favoriteCharacters = favoriteCharacters;
    });
  }

  getFavoriteCharacters(): any[] {
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    const allCharacters: any[] = [];
    return allCharacters.filter(character => favorites.includes(character.id));
  }
  

  removeFromFavorites(characterId: number) {
    this.favoriteService.removeFavoriteCharacter(characterId);
  
    // Aggiorna l'array dei personaggi preferiti nella pagina
    this.favoriteCharacters = this.favoriteCharacters.filter(character => character.id !== characterId);
  }
  
}
