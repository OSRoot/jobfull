import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Storage } from '@ionic/storage-angular'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chat: object[] = []


  // ##########################################################


  search_query: string = '';
  items: any[] = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ];
  filtered_items: any[] = [];

  list_data = [
    {
      username: 'Osama',
      age: 27,
      job: 'Developer'
    }
  ];

  // ##########################################################
  constructor(
    private router: Router,
    private loader: LoadingController,
    private alert_ctrl: AlertController,
    private data_service: DataService,
    private storage: Storage
  ) {
    this.take_me_home()
    this.load_data()
  }
  // ##########################################################


  async load_data() {

  }


  // ##########################################################

  async add_data() {
    this.data_service.get_data()
  }

  // ##########################################################

  async remove_data(index: any) {

  }


  // ##########################################################

  onSearchInput() {
    this.filtered_items = this.items.filter(item => item.title.toLowerCase().includes(this.search_query.toLowerCase()));
  }
  // ##########################################################


  async login() {
    let loader = await this.loader.create({
      message: 'Loading...',
      spinner: 'lines-sharp',
      duration: 1000,
      mode: 'ios'
    });
    await loader.present()
    await this.router.navigate(['/login'])
  }
  // ##########################################################



  async chat_inquiry() {
    let alert = await this.alert_ctrl.create({
      header: 'How can we help you?',
      message: 'This feature will be available soon',
      buttons: [
        { text: 'OK', role: 'cancel' }
      ],
      mode: 'ios'
    });
    await alert.present()
  }
  // ##########################################################

  // ###################################################
  // If user already logged in
  take_me_home() {
    this.storage.get('USER_LOGGED').then(res => {
      if (!res || res.length < 1) {
        return
      }
      if (!res.isAuthenticated) {
        return
      }
      if (res.isAuthenticated === true) {
        this.router.navigate(['/myhome'])
      }


      else {
        return
      }
    })
  }
}
