import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

   
  user:any
  password:any
  email:any
  
  constructor() { }

  ngOnInit() {
  }

}
