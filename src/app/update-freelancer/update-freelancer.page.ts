import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-update-freelancer',
  templateUrl: './update-freelancer.page.html',
  styleUrls: ['./update-freelancer.page.scss'],
})

export class UpdateFreelancerPage implements OnInit {

  email=''
  fName=''
  lName=''
  username=''
  
  update_form!:FormGroup
  constructor(
    private storage:Storage,
    private data_service: DataService
  ) { 

    this.storage.get('USER_LOGGED').then(res =>{
      console.log(res);
      
    })
  }

  ngOnInit() {
    this.update_form = new FormGroup({
      fName: new FormControl ('', Validators.required),
      lName: new FormControl ('', Validators.required),
      email: new FormControl ('', Validators.required),
      username: new FormControl ('', Validators.required),
    })
  }



  update_info(){
    const info = {
      fName:this.fName,
      lName:this.lName,
      email:this.email,
      username:this.username
      
    }
    
    this.data_service.update_freelancer()
  }
}
