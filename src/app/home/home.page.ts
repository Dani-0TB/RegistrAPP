import { Component } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  session: any;

  constructor(
    private authService: AuthenticationService,
    private router: Router
    ) {
    this.session = this.authService.session
  }

  logout(){
    this.router.navigate(['/login'])
  }
  
}
