import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email!: string;
  password!: string;
  login_form!: FormGroup
  sign_up_form: any;
  // ################# END ##################################

  constructor(
    private data_service: DataService,
    private storage: Storage,
    private router: Router,
    private loading_ctrl: LoadingController,
    private alert_ctrl: AlertController,
    private nav_ctrl: NavController,


  ) {
    this.take_me_home()
  }
  // ################# END ##################################

  ngOnInit() {
    this.login_form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }


  // Login
  async login_freelancer() {
    const user_login = {
      email: this.email,
      password: this.password
    }
    this.data_service.login_freelancer(user_login).subscribe(res => {
      const user = res;
      this.storage.set('USER_LOGGED', user);
      if (user.isAuthenticated) {
        localStorage.setItem('username', user.username)

        console.log('user authenticated');

        // this.login_loader();
        setTimeout(() => {

          this.login_alert();
        }, 100);
      }
      console.log(user);



    })
  }


  // ########## handle the password visibilty ###############
  _password: any;
  showPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  // ################# END ##################################

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
  // Loader
  async login_loader() {
    let loader = await this.loading_ctrl.create({
      mode: 'ios',
      message: 'Loggin in ...',
      duration: 1500,
    });
    await loader.present()
  }
  // ###################################################
  // Alert
  async login_alert() {
    let alert = await this.alert_ctrl.create({
      mode: 'ios',
      header: 'Welcome Back',
      message: `Let's Discover more`,
      buttons: [
        {
          text: 'Home', handler: () => {
            this.router.navigate(['home'])
            setTimeout(() => {
              this.nav_ctrl.navigateForward('/myhome')
            }, 100);

          }
        },
        { text: 'Profile', handler: () => { this.router.navigate(['/home']); this.router.navigate(['/myprofile']) } },

      ]
    });
    await alert.present()
  }

}
