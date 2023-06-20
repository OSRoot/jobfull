import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signup-as-client',
  templateUrl: './signup-as-client.page.html',
  styleUrls: ['./signup-as-client.page.scss'],
})
export class SignupAsClientPage implements OnInit {


  roleName: string = 'client'
  username!: string;
  fName!: string;
  lName!: string;
  email!: string;
  password!: string;
  // checked: boolean = false;

  sign_up_form!: FormGroup;
  // ################# END ##################################

  constructor(
    private router: Router,
    private loader: LoadingController,
    private alert_ctrl: AlertController,
    private storage: Storage,
    private data_service:DataService
  ) {
    this.take_me_home();

  }

  // ################# END ##################################

  ngOnInit() {
    this.take_me_home();
    this.sign_up_form = new FormGroup({
      username: new FormControl('', Validators.required),
      fName: new FormControl('', Validators.required),
      lName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      // checked: new FormControl('', Validators.required)
    });
  }
  // ################# END ##################################

  async sign_up_client() {
    // Simple Validation
    let check1: string = this.username
    let check2: string = this.fName
    let check3: string = this.lName
    let check4 = this.email
    let check5 = this.password


    // ####################################
    // ######## Sign up Stage       #######
    // ####################################

    const user: object = {
      roleName: this.roleName,
      username: this.username,
      fName: this.fName,
      lName: this.lName,
      email: this.email,
      password: this.password
    }



    // ####################################
  this.data_service.sign_up_client(user).subscribe(
    async res => {
      console.log(res)
      let client = res;
      this.storage.set('USER_LOGGED', client)
      let alert_signup = await this.alert_ctrl.create({
        mode: 'ios',
        header: `Welcome ${client.username}`,
        message: 'Please Choose What\'s Next?',
        buttons: [
          {
            text: 'Home', handler: () => {
              if (res.isAuthenticated === true) {
                this.sign_up_form.reset()
                this.router.navigate(['myhome']);
                return;
              }
              alert('User not Signed up or Logged in!')
            }
          },
          {
            text: 'Complete Profile', handler: () => {
              if (res.isAuthenticated === true) {
                this.sign_up_form.reset()
                this.router.navigate(['stage01'])
                return;
              }
              alert('User not Signed up or Logged in!')
            }
          }
        ]
      });
      await alert_signup.present()
      // localStorage.setItem('Freelancer', JSON.stringify(freelancer))

    }, async err => {
      let err_error_title = err.error.title;
      let err_error_message = err.error.message;
      let alert_error = await this.alert_ctrl.create({
        mode: 'md',
        header: "Error Failed to Sign up!",
        message: `Reason: ${err.error.title || err.error.message}`,
        buttons: [
          { text: 'Cancel', role: 'cancel' },
          { text: 'Edit Again', role: 'cancel' },
          {
            text: 'Login instead', handler: () => {
              this.router.navigate(['login']);
              this.sign_up_form.reset()
              return;
            }
          }
        ]
      });
      await alert_error.present();
      return;
    })




    // ####################################

  // )

  }
  // ########## handle the password visibilty ###############
  _password: any;
  showPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  // ################# END ##################################

  logger() {
    console.log(this.username);

  }



  // ###################################################
  // If user already logged in
  take_me_home() {
    this.storage.get('USER_LOGGED').then(res => {
      if (!res || res.length < 1) {
        return
      }
      if (res.isAuthenticated) {
        this.router.navigate(['/myhome'])
      }

      else {
        return
      }
    })
  }
  // ###################################################
  // ############## Alert Controller ######################

  async show_alert_email() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'email is too short',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }



  async show_alert_email2() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'Email format invalid',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }

  async show_alert_password() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'password is too short',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }
  async show_alert_phone() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'Enter your phone number correctly',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }

  async show_alert_fname() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'Enter your first name correctly',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }

  async show_alert_lname() {

    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Invalid',
      message: 'Enter your last name correctly',
      buttons: [{ text: 'cancel', role: 'cancel' }]
    })
    await alert.present()
  }


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
}
