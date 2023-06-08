import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Observable, take } from 'rxjs';


const API = 'http://localhost:5106/api/Auth/'
const API0 = 'http://localhost:5106/api/'
const STORAGE_KEY = 'MyData'

@Injectable({
  providedIn: 'root'
})


export class DataService {
  token = '';
  constructor(
    private storage: Storage,
    private http: HttpClient,
  ) {
    // this.init()


  }


  // ###################################################

  async init() {
    await this.storage.defineDriver(cordovaSQLiteDriver)
    await this.storage.create()
    // this.storage.set('USER_LOGGED', [])
    this.storage.get('USER_LOGGED').then(user => {
      if (user) {
        this.token = user.token;
      }
    })
  }

  // ###################################################

  get_data() {
    const stored_data: [] | any = this.storage.get(STORAGE_KEY) || [];
    this.storage.get(STORAGE_KEY)

  }



  // ###################################################
  // ############ Signup as Freelancer
  // we need to post data here
  sign_up_freelancer(user_data: any): Observable<any> {
    this.storage.set('USER_SIGNED', [])
    return this.http.post(API + 'register', user_data).pipe(take(1))
  }



  // ###################################################
  // ############ login as Freelancer
  // We need to post data here
  login_freelancer(user_login: object): Observable<any> {
    this.storage.set('USER_LOGGED', [])
    return this.http.post(API + 'login', user_login).pipe(take(1))
  }



  // ###################################################
  //################ Add Data 

  async user_signed(User: {}[]) {
    const stored_data = await this.storage.get('USER_SIGNED') || [];
    stored_data.push(User);
    return this.storage.set('USER_SIGNED', stored_data);
  }

  async user_logged(User: {}[]) {
    await this.storage.set('USER_LOGGED', [])
    const stored_data = await this.storage.get('USER_LOGGED') || [];
    stored_data.push(User);
    return this.storage.set('USER_LOGGED', stored_data);
  }

  // ###################################################
  //################ Remove Data 
  async remove_signed(index: number) {
    const stored_data = await this.storage.get('USER_SIGNED') || [];
    stored_data.splice(index, 1);
    return this.storage.set('USER_LOGGED', stored_data);
  }

  async remove_logged(index: number) {
    const stored_data = await this.storage.get('USER_LOGGED') || [];
    stored_data.splice(index, 1);
    return this.storage.set('USER_LOGGED', stored_data);
  }



  // ###################################################
  // Send stage01 FormData
  send_freelancer_form(freelancer_form: any) {
    this.storage.set('Freelancer_Data', []);

    let headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`)
      .set('Content-type', 'application/json')

    return this.http.post(`${API0}Freelancer/AddFreelancer`, freelancer_form, { headers }).pipe(take(1))
  }
}
