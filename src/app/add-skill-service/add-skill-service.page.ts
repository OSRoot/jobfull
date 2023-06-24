import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-skill-service',
  templateUrl: './add-skill-service.page.html',
  styleUrls: ['./add-skill-service.page.scss'],
})
export class AddSkillServicePage implements OnInit {

  constructor(
    private storage: Storage
  ) {
    this.storage.get('FreeLancer').then(res =>{
          
    },
      
      
      err=>{})
   }

  ngOnInit() {
  }

}
