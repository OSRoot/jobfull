import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-proposal',
  templateUrl: './edit-proposal.page.html',
  styleUrls: ['./edit-proposal.page.scss'],
})
export class EditProposalPage implements OnInit {

  payment_amount:any
  delivery_time!:any
  description!:string;
  attachment_file!:File;
  service_id:any;
  status:any = 0;
  payment_type_id:any=1;
  freelancer_id:any ;
  proposal_id:any
  proposal_form!:FormGroup;

  constructor(
    private data_service:DataService,
    private activated_route:ActivatedRoute,
    private alert_ctrl:AlertController
    ) { }

  ngOnInit() {
    this.proposal_form = new FormGroup({
      payment_amount:new FormControl('', Validators.required),
      delivery_time:new FormControl('', Validators.required),
      description:new FormControl('', Validators.required),
      // :new FormControl('', Validators.required),
    });
    
    this.proposal_id = this.activated_route.snapshot.paramMap.get('id');
    this.get_one_proposal()
  }

  ion_change_attach(event:any){}


  
  get_one_proposal(){
    this.data_service.get_one_proposal(this.proposal_id).subscribe((res:any)=>{
      console.log(res.data);

      this.freelancer_id=res.data.freelancerId
      this.service_id = res.data.serviceId 

    })
  }





  update_proposal(){
    
    const formdata = new FormData();
    formdata.append('id',this.proposal_id);
    formdata.append('paymentAmount',this.payment_amount);
    formdata.append('deleveryTime',this.delivery_time);
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
