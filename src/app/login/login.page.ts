import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any;
  password: any;

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async login(){

    let error: string = '';

    if (!this.user){
      error = "Ingrese nombre de usuario"
    }
    else if (!this.password){
      error = "Ingrese contraseña"
    }
    else{
      let navigationExtras: NavigationExtras = {state:{user:this.user}}
      this.router.navigate(['/home'], navigationExtras);
      return
    }
    
    

    const alert = await this.alertController.create({
      header: 'Error al inicial sesión',
      message: error,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
