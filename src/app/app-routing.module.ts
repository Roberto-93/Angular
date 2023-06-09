import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListingPageComponent } from './listing-page/listing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,

    children: [
      { path: 'sezione1', component: HomeComponent },
      { path: 'sezione2', component: HomeComponent },

]
},
{path: 'listing', component: ListingPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }