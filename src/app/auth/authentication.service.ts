import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserRegister } from './user';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn = false;
  session: any = {user: "Anonymous", token: "none", "rol":"anonimo"};
  private apiURL: string = 'https://regirst-api.onrender.com/api/auth/'
  private httpOptions = {headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  observe: 'response' as 'response'
  };
  constructor(
    private http: HttpClient
  ) { }

  login(user: User) {
    return this.http.post(this.apiURL + 'login', user, this.httpOptions).pipe(
      retry(3)
    );
  }

  register(registerForm: UserRegister) {
    return this.http.post(this.apiURL + 'registrar', registerForm, this.httpOptions).pipe(
      retry(3)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
