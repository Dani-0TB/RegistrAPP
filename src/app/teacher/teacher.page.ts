import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {
  
  user='';

  clases = [
    {
      nombre: 'class',
      materias: [
        { nombre: 'Aplicaciones Móviles', ocurriendoAhora: true },
        { nombre: 'Calidad de Software', ocurriendoAhora: false },
        { nombre: 'Arquitectura', ocurriendoAhora: false },
        { nombre: 'Ética del Trabajo', ocurriendoAhora: true },
        { nombre: 'Estadística Descriptiva', ocurriendoAhora: false },
      ],
    },

  ];
  editarDatos() {
    console.log('Editando datos del profesor...');
  }

  asistencia ='Funciona codigo'

  generarQR() {
    console.log('Generar QR para la materia:');
  }

  constructor() { }

  ngOnInit() {
  }

}
