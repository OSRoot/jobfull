import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.page.html',
  styleUrls: ['./client-profile.page.scss'],
})
export class ClientProfilePage implements OnInit {
  Show_Profile_Editor=0;
  show_add_service=0;
  form_data!:FormGroup;
  service_form!:FormGroup;


   // ########################################################################
  //          Add service VARS
  // ########################################################################
  service_title!:string;
  service_description!:string;
  service_payment_amount!:string;
  service_location!:string;
  service_status=1;
  service_posted_time!:string;
  service_level=1;
  service_required_days!:string;
  service_client_id!:string;
  service_skill_name!:string
  // ########################################################################

  constructor() { }

  ngOnInit() {

    this.form_data = new FormGroup({
      udateTitle: new FormControl('', Validators.required),
      udateOverview: new FormControl('', Validators.required),
      udateBio: new FormControl('', Validators.required),
      udateCountry: new FormControl('', Validators.required),
      udateCity: new FormControl('', Validators.required),
      udatePhoneNumber: new FormControl('', Validators.required),
      udateStreet: new FormControl('', Validators.required),
      udateHourlyRate: new FormControl('', Validators.required),
      udateRating: new FormControl('', Validators.required),
      Cv: new FormControl('', Validators.required),
      udatePhoto: new FormControl('', Validators.required),
    })


    this.service_form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      payment_amount: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      postedtime: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      required_days: new FormControl('', Validators.required),

    })
  }


  add_service(){

    const service = {
      title:this.service_title,
      description:this.service_description,
      payment_amount:this.service_payment_amount,
      location:this.service_location,
      status:1,
      postedtime:this.service_posted_time,
      level:1,
      requiredTimeInDays:this.service_required_days,
      clientId:''
    }
}


}
