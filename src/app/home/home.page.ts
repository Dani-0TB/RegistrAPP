import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any;

  constructor(private router: Router, private alertController: AlertController) {
    let data = this.router.getCurrentNavigation()?.extras.state;
    console.log(data) 
    if (data && data['user']){
        this.user = data['user'];
    }
  }

  logout(){
    this.router.navigate(['/login'])
  }
  
}
