import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.page.html',
  styleUrls: ['./myhome.page.scss'],
})
export class MyhomePage implements OnInit {

  username: any

  work_list = [
    {
      title: 'Python',
      image: '../../assets/work.avif',
      desc: 'Created an AI Algorithim'
    },
    {
      title: 'Python',
      image: '../../assets/work.avif',
      desc: 'Created an AI Algorithim'
    }, {
      title: 'Python',
      image: '../../assets/work.avif',
      desc: 'Created an AI Algorithim'
    }, {
      title: 'Python',
      image: '../../assets/work.avif',
      desc: 'Created an AI Algorithim'
    }, {
      title: 'Python',
      image: '../../assets/work.avif',
      desc: 'Created an AI Algorithim'
    },
  ]

  activity_list = [
    {
      title: 'Osroot',
      image: '../../assets/work.avif',
      job: 'Full stack developer'
    },
    {
      title: 'Osroot',
      image: '../../assets/work.avif',
      job: 'Full stack developer'
    },
    {
      title: 'Osroot',
      image: '../../assets/work.avif',
      job: 'Full stack developer'
    },
    {
      title: 'Osroot',
      image: '../../assets/work.avif',
      job: 'Full stack developer'
    },
    {
      title: 'Osroot',
      image: '../../assets/work.avif',
      job: 'Full stack developer'
    },
    {
      title: 'Osroot',
      image: '../../assets/work.avif',
      job: 'Full stack developer'
    },
  ]
  // ###################################################

  constructor(
    private storage: Storage,
    private router: Router,
    private modal_ctrl: ModalController,
    private alert_ctrl: AlertController,

  ) {
    this.kick_to_login()
  }
  // ###################################################

  ngOnInit() {
    this.username = localStorage.getItem('username')
  }

  // ###################################################

  go_myprofile() { }
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

}
