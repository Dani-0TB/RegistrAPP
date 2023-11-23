import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../auth/user';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userRegister: UserRegister;
  
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private alertController: AlertController,
  ) {
    this.userRegister = {
      username: '',
      password: '',
      email: ''
    }
  }

  ngOnInit() {
    
  }

  async register(userRegister: UserRegister) {
    this.authService.register(userRegister).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: async (error) => {
        const alert = await this.alertController.create({
          header: 'Error al crear usuario',
          message: error,
          buttons: ['OK'],
        });
        await alert.present();
      }
    });
  }
  
}
