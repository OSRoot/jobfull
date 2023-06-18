import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
  user_image:any;
  imgUrl:any
  Show_Profile_Editor:number=0;
  username!: string;
  country!: string;
  city!: string;
  education:any = [
    {
      school:'Azhar',
      degree:'Good',
      fieldofstudy:'CS',
      datefrom:'00-00-2023',
      dateto:'00-00-2023'
    }
  ];
  school='';
  languages = [];
  experiences= [];
  skills = [];
  notifications = 0;
  constructor(
    private storage: Storage
  ) {
    
    this.storage.get('USER_LOGGED').then((res: any) => {
      const username = res.username;
      this.username = username
    });
    this.storage.get('FreeLancer').then((res: any) => {
      this.user_image = res.imageName;
      const imgUrl = `http://localhost:5106/api/imgs/${res.imageName}`
    })
  }


  
  ngOnInit() {
    // this.get_profile_image()
  }

  // async get_profile_image(){
  //   this.storage.get('Freelancer').then(res =>{
  //     console.log(typeof(res.bio));
      
      
  //   })
  // }1
  
  

}
