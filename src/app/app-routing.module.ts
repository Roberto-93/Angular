import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,

    children: [
      { path: 'sezione1', component: HomeComponent},
      { path: 'sezione2', component: HomeComponent},

]
},
{path: 'listing', component: ListingPageComponent},
{ path: 'Character/:id', component: CharacterDetailComponent },
  { path: 'favorites', component: FavoritePageComponent  },
  { path: '404', component: PageNotFoundComponent }, // Aggiungi questa rotta per la pagina 404
  { path: '**', redirectTo: '/404' } // Reindirizza tutte le altre rotte non definite alla pagina 404
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }