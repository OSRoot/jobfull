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
  freelancerId!:number
  user_role!:any
  fullname = '';
  email=''
  user_image:any;
  imgUrl:any
  Show_Profile_Editor:number=0;
  show_add_service:number = 0;
  show_add_edu =0;
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
  // school!:string
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
  Cv!: File;
  udatePhoto!: File;

  // ########################################################################
  //          Update vars education
  // ########################################################################

  update_edu_ex_lang!:FormGroup;


      update_school!:string
      update_degree!:string
      update_fieldofstudy!:string
      update_datefrom!:string
      update_dateto!:string
      update_description!:string
      update_title!:string
      update_company!:string
      update_descriptionn!:string
      update_region!:string
      update_country!:string
      // still_in_role!:string
      update_startdate!:string
      update_enddate!:string
      update_langname!:string
      update_langlevel!:string
      // skillname!:string
      // category!:string
      // subcategory!:string
      // level!:string
  // ########################################################################

 
  // ########################################################################
service_form!:FormGroup

  // ########################################################################
  myschool!:string
  mydegree!:string
  myfield!:string
  myedudesc!:string
  mydatefrom!:string
  mydateto!:string
  educations:any = [
    {
      school:this.myschool,
      degree:this.mydegree,
      fieldofstudy:this.myfield,
      datefrom:this.mydatefrom,
      description:this.myedudesc,
      dateto:this.mydateto
    }
  ];
  // ########################################################################  
  mylang!:string
  mylanglevel!:string
  languages = [
    {langName:this.mylang,
    level:this.mylanglevel}
  ];
  // ########################################################################
  
  school!:string;
  
  // ########################################################################
  my_ex_title!:string;
  my_ex_company!:string;
  my_ex_startdate!:string;
  my_ex_enddate!:string;
  experiences= [
    {
      title:'',
      company:'',
      description:'',
      country:'',
      startDate:'',
      endDate:'',
    }
  ];


  skills = [];
  
  
  notifications = 0;
  constructor(
    private storage: Storage,
    private data_service: DataService
  ) {

    
    // this.update_edu()
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
      this.overview =res.overview
      this.myschool = res.educations[0].school
      this.mydegree = res.educations[0].degree
      this.myfield = res.educations[0].feldOfStudy
      this.myedudesc = res.educations[0].description
      let datefrom = new Date(res.educations[0].dateFrom)
      this.mydatefrom = `${datefrom.getDate()}-${datefrom.getMonth() + 1}-${datefrom.getFullYear()}`
      let dateto = new Date(res.educations[0].dateTo)
      this.mydateto = `${dateto.getDate()}-${dateto.getMonth() + 1}-${dateto.getFullYear()}`
      this.mylang = res.languages[0].langName
      this.mylanglevel = res.languages[0].level
      this.my_ex_title = res.experiences[0].title
      this.my_ex_company = res.experiences[0].company
      this.my_ex_startdate = res.experiences[0].startDate
      this.my_ex_enddate = res.experiences[0].endDate

      
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
      Cv: new FormControl('', Validators.required),
      udatePhoto: new FormControl('', Validators.required),
    })


    this.update_edu_ex_lang = new FormGroup({
      update_school: new FormControl('', Validators.required),
      update_degree: new FormControl('', Validators.required),
      update_fieldofstudy: new FormControl('', Validators.required),
      update_datefrom: new FormControl('', Validators.required),
      update_dateto: new FormControl('', Validators.required),
      update_description: new FormControl('', Validators.required),
      update_title: new FormControl('', Validators.required),
      update_company: new FormControl('', Validators.required),
      update_descriptionn: new FormControl('', Validators.required),
      update_region: new FormControl('', Validators.required),
      update_country: new FormControl('', Validators.required),
      // still_in_role: new FormControl('', Validators.required),
      update_startdate: new FormControl('', Validators.required),
      update_enddate: new FormControl('', Validators.required),
      update_langname: new FormControl('', Validators.required),
      update_langlevel: new FormControl('', Validators.required),
      // skillname: new FormControl('', Validators.required),
      // category: new FormControl('', Validators.required),
      // subcategory: new FormControl('', Validators.required),
      // level: new FormControl('', Validators.required),

    });
    this.service_form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      payment_amount: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      postedtime: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      required_days: new FormControl('', Validators.required),

    })

  
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

    }

  }
    ion_change_cv(event: any) {
      if (event.target.files.length > 0) {
        this.Cv = event.target.files[0]
        console.log(this.Cv.name);
        this.storage.set('cv_url', this.Cv.name)
        // const formData = new FormData();
        // formData.append('file', file)
        // this.Cv = formData;
        // console.log(this.Cv.get('file'));
  
      }
  
    }
  
  
  
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
    formData.set('Cv', this.Cv);
    formData.set('Photo', this.udatePhoto);

    this.data_service.update_freelancer_form(formData).subscribe((res:any)=>{
      const freelancer = res.data
      console.log(freelancer);
      this.storage.set('FreeLancer', freelancer);
    }, err=>{
      console.log(err);
      
    })
  }





  update_edu(){

    let user_data = {
    
      skills:[{
      name:"none",
      freelancerId:this.freelancerId}],

      services:[{
      Category:"Service",
      SubCategory:"Services",
      freelancerId:this.freelancerId}],

      languages:[{
      langName:this.update_langname, 
      level:this.update_langlevel,
      freelancerId:this.freelancerId}],

      educations:[{
      school:this.school, 
      degree:this.update_degree, 
      feldOfStudy:this.update_fieldofstudy, 
      dateFrom:this.update_datefrom,
      dateTo:this.update_dateto,
      description:this.update_description,
      freelancerId:this.freelancerId}],


      experiences:[{
      title:this.title,
      company:this.update_company, 
      description:this.update_descriptionn,
      country:this.country, 
      region:this.update_region,
      workingInThisRole:true, 
      startDate:this.update_startdate,
      endDate:this.update_enddate,
      freelancerId:this.freelancerId
      }]
}
  this.data_service.update_ex_edu_ski_serv(user_data,this.freelancerId).subscribe(res=>{
   console.log(res);
    
  })
    
  }
  
  
  
  

  }












