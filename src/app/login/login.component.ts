import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailFormControl: FormControl;

  email: string = '';
  password: string = '';
  isEmailFilled: boolean = true;
  isPasswordFilled: boolean = true;


  constructor(private router: Router) { 
    this.emailFormControl = new FormControl();

  }


  login() {
    // Verifica la compilazione dei campi email e password
    this.isEmailFilled = this.email.trim().length > 0;
    this.isPasswordFilled = this.password.trim().length > 0;

    // Verifica le credenziali utente solo se i campi sono compilati
    if (this.isEmailFilled && this.isPasswordFilled) {
      // Verifica le credenziali utente

      if (this.email === 'user@gmail.com' && this.password === '123456') {
        // Effettua l'accesso con successo
        console.log('Accesso effettuato con successo!');

        // Memorizza i dati utente nel localStorage
        const user = {
          email: this.email,
          password: this.password
        };
        localStorage.setItem('user', JSON.stringify(user));

        // Esegui altre azioni come reindirizzamento a una pagina specifica
        this.router.navigate(['/home']);
      } else {
        // Credenziali non valide
        console.log('Credenziali non valide. Riprova.');
      }
    }
  }
}


