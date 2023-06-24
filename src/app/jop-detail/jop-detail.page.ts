import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../services/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-jop-detail',
  templateUrl: './jop-detail.page.html',
  styleUrls: ['./jop-detail.page.scss'],
})
export class JopDetailPage implements OnInit {

  Show_proposal = 0
  payment_amount:any
  delivery_time!:any
  description!:string;
  attachment_file!:File;
  service_id:any=10;
  status:any = 0;
  payment_type_id:any=1;
  freelancer_id!:string;

  proposal_form!:FormGroup
  
  proposal!:FormData
    constructor(
    private storage:Storage,
    private data_service:DataService,
    private alert_ctrl : AlertController,
  ) { 
    this.storage.get('FreeLancer').then(res=>{
      this.freelancer_id = res.id
      console.log(res);
      
    })
  }

  ngOnInit() {
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
      
      // const formData = new FormData();
      // formData.append('file', file)
      // this.Cv = formData;
      // console.log(this.Cv.get('file'));

  }
  }

  // -F 'Descripion=ddddddddd' \
  // -F 'Attachment=' \
  // -F 'ServiceId=1004' \
  // -F 'Status=0' \
  // -F 'PaymentTypeId=1' \
  // -F 'DeleveryTime=3' \
  // -F 'PaymentAmount=15' \
  // -F 'FreelancerId=1011' \
  // -F 'AttachmentFile=@cors.png;type=image/png'
  add_proposal(){
    const formdata = new FormData();
    formdata.append('payment_amount',this.payment_amount);
    formdata.append('delivery_time',this.delivery_time);
    formdata.append('Descripion',this.description);
    formdata.append('status',this.status);
    formdata.append('FreelancerId',this.freelancer_id);
    formdata.append('ServiceId',this.service_id);
    formdata.append('PaymentTypeId',this.payment_type_id);
    // formdata.append('AttachmentFile',this.attachment_file);
    

    this.data_service.add_proposal(formdata).subscribe(res=>{
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

    })

  }


}
