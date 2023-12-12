import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { AsistenciaService } from '../asistencia/asistencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {

  session: any;
  clases: any;
  lista: any;
  numqr: any;
  nombreClase = "";
  qrGenerado = false;
  mostrarAsistencia = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private asistenciaService: AsistenciaService
    ) {
  }

  ngOnInit()
  {
    this.session = this.authService.session;
    this.asistenciaService.listarClases(this.session.user).subscribe({
      next: (response) => {
        this.clases = response.body;
        console.log(this.clases);
      }
    })
  }

  ionViewWillEnter()
  {
    this.session = this.authService.session;
  }

  generarQR(id:number) {
    this.numqr = String(id);
    this.qrGenerado = true;
    this.asistenciaService.crearListaAsistencia(id).subscribe({
    })
  }

  verAsistencia(id:number, nombreClase:string) {
    this.asistenciaService.mostrarLista(id).subscribe({
      next: (response) => {
        this.lista = response.body;
      },
      complete: () => {
        this.mostrarAsistencia = true;
        this.nombreClase = nombreClase;
      }
    });
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['login'])
  }

}
