import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
  
  Show_Profile_Editor:number=0;
  username!: string;
  country!: string;
  city!: string;
  skills = [];
  notifications = 0
  constructor(
    private storage: Storage
  ) {
    this.storage.get('USER_LOGGED').then((res: any) => {
      const username = res.username;
      this.username = username
    });
    this.storage.get('FreeLancer').then((res: any) => {
      this.country = res.country;
    })
  }

  ngOnInit() {

  }


}
