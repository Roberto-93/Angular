import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {
  characters: any[] = [];
  errorMessage: string = '';
  searchQuery: string = '';
  filteredCharacters: any[] = [];
  isImageHovered: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router, 
    ) { }

  // ngOnInit() {
  //   this.fetchCharacters();
  // }

  ngOnInit() {
    // const user = localStorage.getItem('user');
    // if (!user) {
    //   this.router.navigate(['/404']);
    // } else {
      this.fetchCharacters();
      // this.filteredCharacters = this.characters;
//       }
    }

  fetchCharacters() {
    const url = 'https://rickandmortyapi.com/api/character';
    this.http.get<any>(url).pipe(
      catchError(error => {
        this.errorMessage = 'Error occurred while fetching the characters';
        return throwError(() => new Error(error));
      })
    ).subscribe(response => {
      this.characters = response.results;
      this.filterCharacters();
    });
  }

  filterCharacters() {
    this.filteredCharacters = this.characters.filter((character: { name: string; }) => {
      return character.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

  onSearchInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;
    this.filterCharacters();
  }

  onImageMouseEnter(character: any) {
    character.isImageHovered = true;
  }

  onImageMouseLeave(character: any) {
    character.isImageHovered = false;
  }
  goToCharacterDetails(CharacterId: number) {
    // Naviga alla pagina di dettaglio del personaggio utilizzando l'ID del personaggio
    this.router.navigate(['/Character', CharacterId]);
  }

}

