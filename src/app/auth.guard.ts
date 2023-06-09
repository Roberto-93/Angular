import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      return true; // L'utente è autenticato, consente l'accesso alla rotta
    } else {
      this.router.navigate(['/404']); // L'utente non è autenticato, reindirizza alla pagina di accesso
      return false;
    }
  }
}
