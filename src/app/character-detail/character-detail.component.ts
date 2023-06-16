


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  CharacterId: number = 0; // Inizializza la proprietà con un valore di default
  Character: any;
  isFavorite: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private http: HttpClient,
    private favoriteService: FavoriteService
    ) { }

  ngOnInit() {
    this.CharacterId = this.route.snapshot.params['id'];
    this.getCharacterDetails(this.CharacterId);
    this.isFavorite = this.favoriteService.isCharacterFavorite(this.CharacterId);
  }

  getCharacterDetails(characterId: number) {
    this.http.get<any>(`https://rickandmortyapi.com/api/character/${characterId}`)
      .subscribe(response => {
        this.Character = response;
      });
  }


  


  toggleFavorite() {
    const characterId = this.CharacterId;
    // if (this.isFavorite) {
    //   this.favoriteService.removeFavoriteCharacter(characterId);
    // } else {
    //   const characterToAdd = { 
    //     id: characterId, 
    //     name: this.Character.name, 
    //     description: this.Character.description, 
    //     image: this.Character.image 
    //   };
    if (!this.isFavorite){
      const characterToAdd = { 
        id: characterId, 
        name: this.Character.name, 
        description: this.Character.description, 
        image: this.Character.image 
      };
      this.favoriteService.addFavoriteCharacter(characterToAdd);
    }
    this.isFavorite = this.favoriteService.isCharacterFavorite(characterId);
  }
}

  


 

