import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../services/data.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jop-detail',
  templateUrl: './jop-detail.page.html',
  styleUrls: ['./jop-detail.page.scss'],
})
export class JopDetailPage implements OnInit {

  payment_type:string='';
  Show_proposal = 0
  payment_amount:any
  delivery_time:any
  description!:string;
  attachment_file!:File;
  service_id:any=0;
  status:any = 1;
  payment_type_id:any=1;
  freelancer_id:any=0;
  client_id:number =1 
  proposal_form!:FormGroup
  service:any = {};
  service_skills:any = []
  
  proposal!:FormData
    constructor(
    private storage:Storage,
    private data_service:DataService,
    private alert_ctrl : AlertController,
    private activated_route:ActivatedRoute,
    private router:Router
  ) { 
    this.storage.get('FreeLancer').then(res=>{
      this.freelancer_id = res.id
      console.log(res.id);
      
    })
  }

  ngOnInit() {

    this.service_id=this.activated_route.snapshot.paramMap.get('id');
    this.get_service()
    this.proposal_form = new FormGroup({
      payment_amount:new FormControl('', Validators.required),
      delivery_time:new FormControl('', Validators.required),
      description:new FormControl('', Validators.required),
      // :new FormControl('', Validators.required),
    })
  }

  ion_change_attach(event:any){
    if (event.target.files.length > 0) {
      this.attachment_file = event.target.files[0]
      
      ;

  }
  }

 
  add_proposal(){
    const formdata = new FormData();
    formdata.set('paymentAmount',this.payment_amount);
    formdata.set('deleveryTime',this.delivery_time);
    formdata.set('Descripion',this.description);
    formdata.set('status',this.status);
    formdata.set('ServiceId',this.service_id);
    formdata.set('PaymentTypeId',this.payment_type_id);
    formdata.set('FreelancerId',this.freelancer_id);

    console.log(this.freelancer_id);
    console.log(this.payment_amount);
    console.log(this.delivery_time);
    console.log(this.service_id);
    console.log(this.payment_type_id);
    console.log(this.status);
    
    // formdata.append('AttachmentFile',this.attachment_file);
    

    this.data_service.add_proposal(formdata).subscribe(async(res)=>{
      console.log(res);
      this.storage.set('PROPOSALS', res)
      let alert = await this.alert_ctrl.create({
        header:'Proposal Sent',
        message:'Successfull',
        buttons:[
          {text:'Jobs', handler:()=>{
            this.router.navigate(['/jobs']);
          
          }},
          {text:'Edit Proposal', role:'cancel'}
        ]
      });
      await alert.present()
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

    })

  }

  get_service(){
    this.data_service.get_one_service(this.service_id).subscribe((res:any)=>{
      if(res.paymentTypeId==1){
        this.payment_type = 'Vodafone Cash'
      }
      if(res.paymentTypeId==2){
        this.payment_type = 'Bank Account'
      }
      if(res.paymentTypeId==3){
        this.payment_type = 'Cash PickUp'
      }
      this.service = res.data
      this.service_skills = res.data.serviceSkills
      console.log(this.service);
    })
  }

 
}
