import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {
  fullname = '';
  email=''
  user_role!:string;
  user_image:any;
  imgUrl:any
  Show_Profile_Editor:number=0;
  show_add_service:number = 0;
  username!: string;
  country!: string;
  city!: string;
  overview=''
  phone=''
  bio=''
  rating=''
  hourlyrate=''
  title=''
  form_data!: FormGroup;
  // ########################################################################
  //          Update vars
  // ########################################################################
  
  udateOverview!: any;
  udateTitle!: any;
  udateBio!: any;
  udateHourlyRate!: any;
  udateRating!: any;
  udateCountry!: any;
  udateCity!: any;
  udateStreet!: any;
  udatePhoneNumber!: any;
  udateCv!: File;
  udatePhoto!: File;


  // ########################################################################

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
    private storage: Storage,
    private data_service: DataService
  ) {
    
    this.storage.get('USER_LOGGED').then((res: any) => {
      const username = res.username;
      this.username = username
      this.fullname = res.fName+' ' +res.lName
      this.email = res.email;
      
    });
    this.storage.get('FreeLancer').then((res: any) => {
      this.user_image = res.imageName;
      this.user_role = res.user.roleName
      console.log(res.user.roleName);
      this.hourlyrate = res.hourlyRate
      this.bio = res.bio
      this.country=res.country
      this.city = res.city
      this.rating = res.rating
      this.title = res.title
      
      // const imgUrl = `http://localhost:5106/api/imgs/${res.imageName}`
    })
  }


  
  ngOnInit() {
    this.form_data = new FormGroup({
      udateTitle: new FormControl('', Validators.required),
      udateOverview: new FormControl('', Validators.required),
      udateBio: new FormControl('', Validators.required),
      udateCountry: new FormControl('', Validators.required),
      udateCity: new FormControl('', Validators.required),
      udatePhoneNumber: new FormControl('', Validators.required),
      udateStreet: new FormControl('', Validators.required),
      udateHourlyRate: new FormControl('', Validators.required),
      udateRating: new FormControl('', Validators.required),
      udateCv: new FormControl('', Validators.required),
      udatePhoto: new FormControl('', Validators.required),
    })

    // this.get_profile_image()
  }



  ion_change_photo(event: any) {
    if (event.target.files.length > 0) {
      this.udatePhoto = event.target.files[0];
      console.log(this.udatePhoto);
      this.storage.set('cv_url', this.udatePhoto.name)


      // const formData = new FormData();
      // formData.append('photo', file)
      // this.Photo = formData;
      // console.log(this.Photo.get('photo'));

    }}
  // async get_profile_image(){
  //   this.storage.get('Freelancer').then(res =>{
  //     console.log(typeof(res.bio));
      
  ion_change_cv(event: any) {
    if (event.target.files.length > 0) {
      this.udateCv = event.target.files[0]
      console.log(this.udateCv.name);
      this.storage.set('cv_url', this.udateCv.name)
      // const formData = new FormData();
      // formData.append('file', file)
      // this.Cv = formData;
      // console.log(this.Cv.get('file'));

    }

  }

  //   })
  // }1
  
  
  update_freelancer(){
    const formData = new FormData();
    formData.append('title', this.udateTitle);
    formData.append('overview', this.udateOverview);
    formData.append('bio', this.udateBio);
    formData.append('country', this.udateCountry);
    formData.append('city', this.udateCity);
    formData.append('street', this.udateStreet);
    formData.append('HourlyRate', this.udateHourlyRate);
    formData.append('Rating', this.udateRating);
    formData.append('phoneNumber', this.udatePhoneNumber);
    formData.append('Cv', this.udateCv);
    formData.append('cvName', this.udateCv.name);
    formData.append('Photo', this.udatePhoto);

    this.data_service.update_freelancer_form(formData).subscribe((res:any)=>{
      const freelancer = res.data
      console.log(freelancer);
      this.storage.set('FreeLancer', freelancer);
    })
  }
  update_edu_ex_lang_ski_ser(){}
}
