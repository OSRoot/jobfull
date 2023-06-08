import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import {Storage } from '@ionic/storage-angular';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { ToastController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

const API = 'http://localhost:5106/api/Auth/'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);

  constructor(

    // private storage: Storage,
    private http: HttpClient,

  ) { }




  // ###################################################
  // ############ Signup as Freelancer
  // we need to post data here
  sign_up_freelancer(user_data: any): Observable<any> {
    return this.http.post(API + 'register', user_data).pipe(take(1))

  }



  // ###################################################
  // ############ login as Freelancer
  // We need to post data here
  login_freelancer(user_login: object): Observable<any> {
    return this.http.post(API + 'login', user_login).pipe(take(1))

  }



}
