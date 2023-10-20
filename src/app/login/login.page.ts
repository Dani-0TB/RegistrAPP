import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular';
import { User } from '../auth/user';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User;

  constructor(
    private router: Router, 
    private alertController: AlertController,
    private authService: AuthenticationService
    ) {
      this.user = {
        username: "",
        password: ""
      }
    }

  ngOnInit() {
  }

  login(){

    let error: string = '';

    if (this.user.username == ""){
      error = "Ingrese nombre de usuario"
    }
    else if (this.user.password == ""){
      error = "Ingrese contraseña"
    }
    else{
      this.authService.login(this.user).subscribe({
        next: (response) => {
          this.authService.isLoggedIn = true;
          this.authService.session = response.body;
          let session = response.body;
          if (session) {
            localStorage.setItem("session", JSON.stringify(session))
          }
          this.router.navigate(['/home'])
        },
        error: async (response) => {
          const alert = await this.alertController.create({
            header: 'Error al inicial sesión',
            message: 'Verifique sus credenciales',
            buttons: ['OK'],
          });
          await alert.present();
        }
      });
    }
  }
}
