import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private apiURL: string = 'https://regirst-api.onrender.com/api/asistencia/'
  private httpOptions = {headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  observe: 'response' as 'response'
  };
  constructor(
    private http: HttpClient
  ) { }

  listarClases(username: string)
  {
    return this.http.post(this.apiURL + 'listarClases', {username:username}, this.httpOptions).pipe(
      retry(3)
    );
  }

  crearListaAsistencia(idClase: number)
  {
    return this.http.post(this.apiURL + 'crearListaAsistencia', {idClase:idClase}, this.httpOptions).pipe(
      retry(3)
    );
  }

  mostrarLista(idClase: number)
  {
    return this.http.post(this.apiURL + 'mostrarLista', {idClase:idClase}, this.httpOptions).pipe(
      retry(3)
    );
  }

  confirmarAsistencia(idClase: number, username: string)
  {
    return this.http.post(this.apiURL + 'confirmarAsistencia', {idClase:idClase, username: username}, this.httpOptions).pipe(
      retry(3)
    );
  }
}

