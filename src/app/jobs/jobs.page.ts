import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  no_proposals =false
  show_edit_proposal=0
  jobs:any = [];


  payment_amount:any
  delivery_time!:any
  description!:string;
  attachment_file!:File;
  service_id:any=10;
  status:any = 0;
  payment_type_id:any=1;
  freelancer_id:any = 18;

  proposal_form!:FormGroup
  
  proposal!:FormData
  constructor(
    private data_service:DataService,
    private alert_ctrl:AlertController
  ) { }

  ngOnInit() {
    this.proposal_form = new FormGroup({
      payment_amount:new FormControl('', Validators.required),
      delivery_time:new FormControl('', Validators.required),
      description:new FormControl('', Validators.required),
      // :new FormControl('', Validators.required),
    })
  }

  ion_change_attach(event:any){

  }


  update_proposal(){
    const formdata = new FormData();
    formdata.append('payment_amount',this.payment_amount);
    formdata.append('delivery_time',this.delivery_time);
    formdata.append('Descripion',this.description);
    formdata.append('status',this.status);
    formdata.append('FreelancerId',this.freelancer_id);
    formdata.append('ServiceId',this.service_id);
    formdata.append('PaymentTypeId',this.payment_type_id);
    formdata.append('AttachmentFile',this.attachment_file);
    

    this.data_service.update_proposal(formdata).subscribe(res=>{
      console.log(res);
      return
    },async err =>{
      console.log(err);
      let alert_error = await this.alert_ctrl.create({
        header:`Cannot Submit Proposal`,
        message:`Code: ${err.status},
                 Status: ${err.error.status}
                 Message: ${err.error.message}`,
        buttons:[
          {text:'Edit again', role:'cancel'}
        ]
      });
      await alert_error.present()
      return
      
    })

  }
}
