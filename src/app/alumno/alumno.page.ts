import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage {

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
