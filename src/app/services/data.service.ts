import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Observable, take } from 'rxjs';


const API = 'http://localhost:5106/api/Auth/'
const API0 = 'http://localhost:5106/api/'
const API1 = 'http://localhost:5106/api/Freelancer/AddLanExED'
// const API1 = 'http://localhost:5106/api/Freelancer/EditLanExED/id'
const STORAGE_KEY = 'MyData'

@Injectable({
  providedIn: 'root'
})


export class DataService {

  // Vars 
  user_edu = [];
  user_exp = [];
  user_lan = [];
  user_ski = [];
  

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
    await this.storage.create();

    // this.storage.set('USEREDU', '');
    // this.storage.set('USEREXP', '');
    // this.storage.set('USERSKI', '');
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

  sign_up_client(client_data: any): Observable<any> {
    this.storage.set('CLINET_SIGNED', [])
    return this.http.post(API + 'register', client_data).pipe(take(1))
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
  send_freelancer_form(freelancer_form: FormData) {
    this.storage.set('Freelancer_Data', []);

    let headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`)
    // .set('Content-Type', 'multipart/form-data; boundary=--14737809831466499882746641449')
    // .set('Accept', 'Application/json')

    return this.http.post(`${API0}Freelancer/AddFreelancer`, freelancer_form, { headers }).pipe(take(1))
  }



  update_freelancer_form(freelancer_form: FormData) {
    this.storage.set('Freelancer_Data', []);

    let headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`)
    // .set('Content-Type', 'multipart/form-data; boundary=--14737809831466499882746641449')
    // .set('Accept', 'Application/json')

    return this.http.post(`${API0}Freelancer/AddFreelancer`, freelancer_form, { headers }).pipe(take(1))
  }


  send_client_form(freelancer_form: any) {
    this.storage.set('Client_Data', []);

    // let headers = new HttpHeaders()
    //   .set('Authorization', `Bearer ${this.token}`)
    //   .set('Content-type', 'application/json')

    // return this.http.post(`${API0}Freelancer/AddFreelancer`, freelancer_form,).pipe(take(1))
  }

  // ########################################################################################
  // ########################################################################################


  // {
  //   "Skills":[{"name":"Skill1"}],
  //   "Services":[{"Category":"Service",
  //                 "SubCategory":"Servicee"}],
  //   "Languages":[{"LangName":"English", "Level":"native"}],
  //   "Educations":[{"Degree":"Good", "School":"School", "Description":"ibgprdsgsgdsgsdgsghiabf;aibfaias"}],
  //   "Experiences":[{"Title":"HTML","Region":"CA", "Company":"Google","Country":"EG", "StartDate":"25/11/1995", "Description":"usabgfu;afasfas"}]
  // }



  add_ex_edu_ski_serv(body:any){
    return this.http.post(`${API0}Freelancer/AddLanExED`,body).pipe(take(1));
  }

  // ########################################################################################
  // ########################################################################################
// Proposals
  get_one_proposal(id:any){
    return this.http.get(`http://localhost:5106/api/Proposal/Get_By_Id?id=${id}`).pipe(take(1))
  }
  get_all_proposals(){
    return this.http.get(`http://localhost:5106/api/Proposal/Get_All`).pipe(take(1))
  }
  add_proposal(proposal:any){
    let headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`)
    return this.http.post('http://localhost:5106/api/Proposal/AddProposal', proposal, {headers}).pipe(take(1))
  }
  update_proposal(proposal: any){
    return this.http.put('http://localhost:5106/api/Proposal/UpadteProposal', proposal).pipe(take(1))
  }
  delete_proposal(id:any){
    return this.http.delete(`http://localhost:5106/api/Proposal/Delete?id=${id}`).pipe(take(1))
  }

  
  // ########################################################################################
  // ########################################################################################

  
  // ########################################################################################
  // ########################################################################################
// Services
get_one_service(id:any){
  return this.http.get(`http://localhost:5106/api/Service/GETSERVICEBYID?id=${id}`).pipe(take(1))
}
get_all_services(){
  return this.http.get(`http://localhost:5106/api/Service/GetAllServices`).pipe(take(1))
}
add_service(service:any){
  return this.http.post('http://localhost:5106/api/Service/ADDSERVICE', service).pipe(take(1))
}
update_service(service: any){
  return this.http.put('http://localhost:5106/api/Service/EDITERVICE', service).pipe(take(1))
}
delete_service(id:any){
  return this.http.delete(`http://localhost:5106/api/Service/DELETSERVICE?id=${id}`).pipe(take(1))
}



update_freelancer(){

}

get_freelancer_by_id(id:any){
  return this.http.get(`http://localhost:5106/api/Freelancer/GetAllById?id=${id}`)
}

}
