import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-stage01',
  templateUrl: './stage01.page.html',
  styleUrls: ['./stage01.page.scss'],
})
export class Stage01Page implements OnInit {
  user_id!:number
  Overview!: any;
  Title!: any;
  Bio!: any;
  HourlyRate!: any;
  Rating!: any;
  Country!: any;
  City!: any;
  Street!: any;
  PhoneNumber!: any;
  Cv!: File;
  Photo!: File;

  token = ''
  form_data!: FormGroup;

  // ########################################################
  constructor(
    private data_service: DataService,
    private storage: Storage,
    private alert_ctrl: AlertController,
    private router : Router

  ) {

  }
  // ########################################################

  ngOnInit() {

    this.form_data = new FormGroup({
      Title: new FormControl('', Validators.required),
      Overview: new FormControl('', Validators.required),
      Bio: new FormControl('', Validators.required),
      Country: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      PhoneNumber: new FormControl('', Validators.required),
      Street: new FormControl('', Validators.required),
      HourlyRate: new FormControl('', Validators.required),
      Rating: new FormControl('', Validators.required),
      Cv: new FormControl('', Validators.required),
      Photo: new FormControl('', Validators.required),
    })

    // this.handle_data_form()
  }

  // update_form() {
  //   this.handle_data_form()
  // }
kick_me(){
  this.storage.get('')
}



  ion_change_cv(event: any) {
    if (event.target.files.length > 0) {
      this.Cv = event.target.files[0]
      console.log(this.Cv.name);
      this.storage.set('cv_url', this.Cv.name)
      // const formData = new FormData();
      // formData.append('file', file)
      // this.Cv = formData;
      // console.log(this.Cv.get('file'));

    }

  }

  on_submit(data: any) {
    console.log(data);

  }
 

  ion_change_photo(event: any) {
    if (event.target.files.length > 0) {
      this.Photo = event.target.files[0];
      console.log(this.Photo);
      this.storage.set('cv_url', this.Photo.name)


      // const formData = new FormData();
      // formData.append('photo', file)
      // this.Photo = formData;
      // console.log(this.Photo.get('photo'));

    }

  }




  handle_data_form() {
    const formData = new FormData();
    formData.append('title', this.Title);
    formData.append('overview', this.Overview);
    formData.append('bio', this.Bio);
    formData.append('country', this.Country);
    formData.append('city', this.City);
    formData.append('street', this.Street);
    formData.append('HourlyRate', this.HourlyRate);
    formData.append('Rating', this.Rating);
    formData.append('phoneNumber', this.PhoneNumber);
    formData.set('Cv', this.Cv);
    formData.set('Photo', this.Photo);
    // formData.get('Photo')
    // Save Form data in the storage
    // const full_form: object = {
    //   Title: [this.Title],
    //   Overview: [this.Overview],
    //   Bio: [this.Bio],
    //   Country: [this.Country],
    //   City: this.City,
    //   PhoneNumber: this.PhoneNumber,
    //   Street: this.Street,
    //   HourlyRate: this.HourlyRate,
    //   Rating: this.Rating,
    //   Cv: this.Cv,
    //   Photo: this.Photo
    // }

    // Init 
    this.data_service.send_freelancer_form(formData).subscribe((res: any) => {
      const freelancer = res.data
      console.log(freelancer);
      this.storage.set('FreeLancer', freelancer);
      if (freelancer){this.router.navigate(['/add-edu'])}
      else {return}
      
      // console.log(freelancer);


    }, err => {
      console.log(err);
     this.alert_error(err);
     return

    })
    // Set new Data to the local storage;

    // localStorage.setItem('All_info', JSON.stringify(full_form))




    // send Form to the backend

  }















  // ###########################################################################################
  // ########################## Alerts and Toast and Loader Controllers
  // ###########################################################################################
  // ##########################
  // ############# Alerts 
  // ##########################
  async failed_Title() { }
  async failed_Bio() { }
  async failed_Overview() { }
  async failed_Country() { }
  async failed_City() { }
  async failed_PhoneNumber() { }
  async failed_HourlyRate() { }


  // ###########################################################################################
  // ########################## Alerts and Toast and Loader Controllers
  // ###########################################################################################
  // ##########################
  // ############# Toasters 
  // ##########################
  async welcome_user() { }


  // ###########################################################################################
  // ########################## Alerts and Toast and Loader Controllers
  // ###########################################################################################
  // ##########################
  // ############# Loaders 
  // ##########################
  async main_loader() { }


  async alert_error(message:any){
    let alert = await this.alert_ctrl.create({
      header:'Error',
      message: message.error || message.message,
      buttons:[
        {text:'Ok', role:'cancel'}
      ]
    });
    await alert.present();
  }

}
