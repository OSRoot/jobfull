import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-stage01',
  templateUrl: './stage01.page.html',
  styleUrls: ['./stage01.page.scss'],
})
export class Stage01Page implements OnInit {

  Overview!: string;
  Title!: string;
  Bio!: string;
  HourlyRate!: number;
  Rating!: number;
  Country!: string;
  City!: string;
  Street!: string;
  PhoneNumber!: string;
  Cv!: FormData;
  Photo!: FormData;
  token = ''
  form_data!: FormGroup;

  // ########################################################
  constructor(
    private data_service: DataService,
    private storage: Storage,

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

  update_form() {
    this.handle_data_form()
  }




  ion_change_cv(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      const formData = new FormData();
      formData.append('file', file)
      this.Cv = formData;
      console.log(this.Cv.get('file'));

    }

  }

  on_submit(data: any) {
    console.log(data);

  }


  ion_change_photo(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('photo', file)
      this.Photo = formData;
      console.log(this.Photo.get('photo'));

    }

  }




  handle_data_form() {

    // Save Form data in the storage
    const full_form: object = {
      Title: this.Title,
      Overview: this.Overview,
      Bio: this.Bio,
      Country: this.Country,
      City: this.City,
      PhoneNumber: this.PhoneNumber,
      Street: this.Street,
      HourlyRate: this.HourlyRate,
      Rating: this.Rating,
      Cv: this.Cv,
      Photo: this.Photo
    }

    // Init 
    this.data_service.send_freelancer_form(full_form).subscribe(res => {
      console.log(res)

    }, err => {
      console.log(err);

    })
    // Set new Data to the local storage;

    localStorage.setItem('All_info', JSON.stringify(full_form))




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

}
