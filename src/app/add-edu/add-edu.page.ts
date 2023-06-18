import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.page.html',
  styleUrls: ['./add-edu.page.scss'],
})
export class AddEduPage implements OnInit {

  // Education vars
  school!: string;
  degree!: string;
  fieldofstudy!: string;
  datefrom!: string;
  dateto!: string;
  description!: string;

  // Experience vars
  title!: string;
  company!: string;
  descriptionn!: string;
  region!: string;
  country!: string;
  still_in_role!: boolean;
  startdate!: string;
  enddate!: string;

  // Languages vars
  langname!: string;
  langlevel!: string;

  // skills vars
  skillname!: string;


  // services vars
  category!: string;
  subcategory!: string;
  level!: number

  // 
  the_form!: FormGroup;



  constructor(
    private storage: Storage,
    private data_service: DataService
  ) { }

  ngOnInit() {
    this.the_form = new FormGroup({
      school: new FormControl('', Validators.required),
      degree: new FormControl('', Validators.required),
      fieldofstudy: new FormControl('', Validators.required),
      datefrom: new FormControl('', Validators.required),
      dateto: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      descriptionn: new FormControl('', Validators.required),
      // region: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      // still_in_role: new FormControl('', Validators.required),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required),
      langname: new FormControl('', Validators.required),
      langlevel: new FormControl('', Validators.required),
      // skillname: new FormControl('', Validators.required),
      // category: new FormControl('', Validators.required),
      // subcategory: new FormControl('', Validators.required),
      // level: new FormControl('', Validators.required),

    })

  }

  add_edu(form: any) {
    let mydata = {
      educations: [
        { school: this.school, 
          degree: this.degree, 
          feldOfStudy: this.fieldofstudy, 
          dateFrom: this.datefrom, 
          dateTo: this.dateto, 
          description: this.description }
      ],
      experiences: [],
      languages: [],
      skills: [],
      services: []
    }


  }
}
