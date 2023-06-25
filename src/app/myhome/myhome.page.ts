import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.page.html',
  styleUrls: ['./myhome.page.scss'],
})
export class MyhomePage implements OnInit {

  username: any


 
  // ###################################################

  constructor(
    private storage: Storage,
    private router: Router,
    private modal_ctrl: ModalController,
    private alert_ctrl: AlertController,
    private data_service: DataService

  ) {
    this.kick_to_login()
    this.get_all_jobs()
  }
  // ###################################################

  ngOnInit() {
    this.username = localStorage.getItem('username')
    this.get_all_jobs()
  
  }

  // ###################################################

  go_myprofile() {

    this.storage.get('FreeLancer').then(res=>{
      if (res){
        if (res.user.roleName==='freelancer'||res.user.roleName==='Freelancer'){
          this.router.navigate(['myprofile'])
        return
        }
        if(res.user.roleName==='client'||res.user.roleName==='Client'){
          this.router.navigate(['client-profile'])
        }
      }
      
    })

   }

  // ###################################################

  kick_to_login() {
    this.storage.get('USER_LOGGED').then(res => {
      // this.username = res.username

      if (!res) {
        this.router.navigate(['login']);
      }
      else {
        this.username = localStorage.getItem('username');
        this.username = res.username
        return
      }
      setTimeout(() => {
        this.username = localStorage.getItem('username');
        this.username = res.username
      }, 100);
    })
  }
  // ###################################################
  // Loader
  async loader() {
    // let loader = await this.loader.cr
  }
  // ###################################################

  // ###################################################

  async profile_options() {
    let modal = await this.modal_ctrl.create({
      mode: 'ios',
      component: MyhomePage,

    })
  }

  // ###################################################
  async logout() {
    let alert = await this.alert_ctrl.create({
      mode: 'md',
      header: 'Confirm',
      message: 'Are you sure you want to logout?',
      buttons: [
        { text: 'No', role: 'cancel' },
        {
          text: 'Yes, Logout Now', handler: () => {
            this.storage.clear();
            localStorage.clear()
            this.router.navigate(['home'])
          }
        }
      ]

    });
    await alert.present()
  }

  // ###################################################

  services:any = []
  service_id :any
  
  get_all_jobs(){
    this.data_service.get_all_services().subscribe((res:any)=>{
      this.storage.set('SERVICES', res.data)
      // alert('Done')
      this.services = res.data
    },err=>{
      alert(err)
    })
  }



get_all_proposals(){
  this.data_service.get_all_proposals().subscribe((res:any)=>{
    this.storage.set('PROPOSALS', res.data)
  })
}

}
