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
  }

  ngOnInit()
  {
    this.session = this.authService.session;
  }

  ionViewWillEnter()
  {
    this.session = this.authService.session;
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
  
}
