import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../services/data.service';

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
  service_payment_type!:string;
  service_location!:string;
  service_status:any;
  service_posted_time!:string;
  service_level:any;
  service_required_days!:string;
  service_client_id!:string;
  service_skill_name!:string
  clientId:any;
  // ########################################################################

  constructor(
    private storage:Storage,
    private data_service:DataService
  ) { }

  ngOnInit() {
    this.storage.get('FreeLancer').then(res=>{
      this.clientId = res.id
    })

   

    this.service_form = new FormGroup({
      service_title: new FormControl('', Validators.required),
      service_description: new FormControl('', Validators.required),
      service_payment_amount: new FormControl('', Validators.required),
      service_location: new FormControl('', Validators.required),
      service_posted_time: new FormControl('', Validators.required),
      service_payment_type: new FormControl('', Validators.required),
      
      level: new FormControl('', Validators.required),
      service_required_days: new FormControl('', Validators.required),
      service_skill_name:  new FormControl('', Validators.required),

    })
  }


  add_service(){

    const service = {
      service:{title:this.service_title,
        description:this.service_description,
        payment_amount:this.service_payment_amount,
        location:this.service_location,
        status:1,
        postedtime:this.service_posted_time,
        level:1,
        paymentTypeId:1,
        requiredTimeInDays:this.service_required_days,
        clientId:this.clientId},
      serviceSkills:[
        {Name:this.service_skill_name}
      ]
    }


    this.data_service.add_service(service).subscribe(res=>{
      console.log(res);
      
    },err=>{
      console.log(err);
      
    })
}


}
