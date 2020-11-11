import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  loginEmail: string = "";
  registerEmail: string = "";
  loginPassword: string = "";
  registerPassword: string = "";
  errorText: string = "";

  constructor(public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.auth.signInWithEmailAndPassword(this.loginEmail, this.loginPassword).then( value => {
      this.router.navigate(["home"]);
    }).catch( err =>this.errorText = err.message);
  }

  doRegister() {
    this.auth.createUserWithEmailAndPassword(this.registerEmail,this.registerPassword).then( value => {
      this.router.navigate(["home"]);
    }).catch( err => this.errorText = err.message);
  }
}
