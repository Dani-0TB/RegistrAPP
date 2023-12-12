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
    this.authService.login(this.user).subscribe({
      next: (response) => {
        this.authService.isLoggedIn = true;
        this.authService.session = response.body;
        
        let session: any = response.body;
        if (session) {
          localStorage.setItem("session", JSON.stringify(session))
        }
        if (session.rol == "profesor") {
          this.router.navigate(['teacher'])
        } else {
          this.router.navigate(['alumno']);
        }
          
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
