import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],

    children: [
      { path: 'sezione1', component: HomeComponent,canActivate: [AuthGuard]},
      { path: 'sezione2', component: HomeComponent,canActivate: [AuthGuard]},

]
},
{path: 'listing', component: ListingPageComponent,canActivate: [AuthGuard]},
{ path: 'Character/:id', component: CharacterDetailComponent,canActivate: [AuthGuard] },
  { path: 'favorites', component: FavoritePageComponent,canActivate: [AuthGuard]  },
  { path: '404', component: PageNotFoundComponent }, 
  { path: '**', redirectTo: '/404' } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }