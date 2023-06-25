import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  no_proposals =false
  show_edit_proposal=0
  jobs:any = [];
  my_proposals:any = []
  payment_amount:any
  delivery_time:any
  description!:string;
  attachment_file!:File;
  service_id:any;
  status:any = 0;
  payment_type_id:any=1;
  freelancer_id:any;
  service_title!:string
  proposal_form!:FormGroup
  
  proposal!:FormData
  constructor(
    private data_service:DataService,
    private alert_ctrl:AlertController,
    private storage:Storage
  ) { }

  ngOnInit() {
    this.storage.get('FreeLancer').then(res=>{
      this.freelancer_id = res.id
    })
    this.storage.get('SERVICES').then(res=>{
      console.log(res);
      for (let service of res){
        // console.log(service);
      }
    })
    this.storage.get('PROPOSALS').then(res=>{
        console.log(`propos`,res);
        this.service_id=res.data.serviceId
        console.log(`Service id`+this.service_id);
    this.get_service_via_propo()
      
      
  })
    this.proposal_form = new FormGroup({
      payment_amount:new FormControl('', Validators.required),
      delivery_time:new FormControl('', Validators.required),
      description:new FormControl('', Validators.required),
      // :new FormControl('', Validators.required),
    });
    this.get_proposals()
  }

  ion_change_attach(event:any){

  }


  update_proposal(){

  }

  get_proposals(){
    this.data_service.get_all_proposals().subscribe((res:any)=>{
      
      this.my_proposals = res.data
      
      for (let prop of this.my_proposals){
        if (1){}
      }

    })
  }

  get_service_via_propo(){
    console.log(`SERVICE ID `+this.service_id);
    
    this.data_service.get_one_service(this.service_id).subscribe((res:any)=>{
      console.log(res);
      this.service_title=res.data.title
      
    })
  }

}
