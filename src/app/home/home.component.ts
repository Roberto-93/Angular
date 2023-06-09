import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (!user) {
      // Non è presente un utente nel localStorage, reindirizza alla pagina di accesso
      this.router.navigate(['/404']);
    }
  }

}
