// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ItemService } from '../item.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-details',
//   templateUrl: './details.component.html',
//   styleUrls: ['./details.component.scss']
// })
// export class DetailsComponent implements OnInit {
//   itemId!: number;
//   item: any;
//   favorites: any[] = [];

//   constructor(
//     private route: ActivatedRoute,
//     private itemService: ItemService,
//     private router: Router
//   ) { }

//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       const id = Number(params['id']); 
//       if (!isNaN(id)) { 
//         this.itemId = id;
//         this.getItemDetails(this.itemId);
//       } else {
//         this.router.navigate(['/error']);
        
//       }
//     });
//   }

//   getItemDetails(id: number) {
//     this.itemService.getItem(id).subscribe(
//       item => {
//         this.item = item;
//       },
//       error => {
//         console.error('Errore durante la richiesta all\'API di Rick and Morty:', error);
      
//       }
//     );
//   }
  
//   addToFavorites(item: any) {
//     this.favorites.push(item);
//   }
//   }




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

    const user = localStorage.getItem('user');
    if (!user) {
      // Non è presente un utente nel localStorage, reindirizza alla pagina di accesso
      this.router.navigate(['/404']);
    }
  }

  getCharacterDetails(characterId: number) {
    this.http.get<any>(`https://rickandmortyapi.com/api/character/${characterId}`)
      .subscribe(response => {
        this.Character = response;
      });
  }


  

  // toggleFavorite() {
  //   const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  //   const characterId = this.CharacterId;
  //   const index = favorites.indexOf(characterId);
  
  //   if (index !== -1) {
  //     favorites.splice(index, 1);
  //     this.favoriteService.removeFavoriteCharacter(characterId);
  //   } else {
  //     favorites.push(characterId);
  //     const characterToAdd = { id: characterId, name: this.Character.name, description: this.Character.description, image: this.Character.image };
  //     this.favoriteService.addFavoriteCharacter(characterToAdd);
  //   }

  //   localStorage.setItem('favorites', JSON.stringify(favorites));
  //   this.isFavorite = !this.isFavorite;
  // }
  toggleFavorite() {
    const characterId = this.CharacterId;
    if (this.isFavorite) {
      this.favoriteService.removeFavoriteCharacter(characterId);
    } else {
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

  


 

