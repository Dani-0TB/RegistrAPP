import { Component } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';
import { AsistenciaService } from '../asistencia/asistencia.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage {

  isSupported = false;
  barcodes: Barcode[] = [];
  session: any;

  constructor(
    private alertController: AlertController, 
    private authService: AuthenticationService,
    private router: Router,
    private asistenciaService: AsistenciaService
    ) {}

  ngOnInit() {
    this.session = this.authService.session;
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  ionViewWillEnter()
  {
    this.session = this.authService.session;
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();

    this.barcodes.push(...barcodes);
    let idClase = this.barcodes[-1]
    this.asistenciaService.confirmarAsistencia(Number(idClase),this.session.user)
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['login'])
  }
}
