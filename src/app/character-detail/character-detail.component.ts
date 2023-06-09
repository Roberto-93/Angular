import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  itemId!: number;
  item: any;
  favorites: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']); 
      if (!isNaN(id)) { 
        this.itemId = id;
        this.getItemDetails(this.itemId);
      } else {
        this.router.navigate(['/error']);
        
      }
    });
  }

  getItemDetails(id: number) {
    this.itemService.getItem(id).subscribe(
      item => {
        this.item = item;
      },
      error => {
        console.error('Errore durante la richiesta all\'API di Rick and Morty:', error);
      
      }
    );
  }
  
  addToFavorites(item: any) {
    this.favorites.push(item);
  }
  }