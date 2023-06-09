import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

constructor(private router: Router) { }
logout() {
    // Rimuovi i dati utente dal localStorage
    localStorage.removeItem('user');  
  // Dopo il logout, puoi reindirizzare l'utente alla pagina di accesso o a un'altra pagina appropriata
  this.router.navigate(['/login']);
}

}