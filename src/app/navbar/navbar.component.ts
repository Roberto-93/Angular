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
  // Logica per eseguire il logout dell'utente
  // Ad esempio, puoi rimuovere i dati dell'utente dall'archiviazione locale o eseguire una richiesta al server per invalidare la sessione
  // Dopo il logout, puoi reindirizzare l'utente alla pagina di accesso o a un'altra pagina appropriata
  this.router.navigate(['/login']);
}

}