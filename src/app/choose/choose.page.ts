import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.page.html',
  styleUrls: ['./choose.page.scss'],
})
export class ChoosePage implements OnInit {

  is_disabled_client = true;
  is_disabled_freelancer = true;
  // #####################################// #####################################

  constructor(
    private router: Router,
    private loader: LoadingController
  ) { }
  // #####################################// #####################################

  ngOnInit() {
  }
  // #####################################// #####################################


  get_role(event: any) {
    const role = event.target.value;
    if (role === 'client') {
      this.is_disabled_freelancer = true;
      this.is_disabled_client = false
    }
    if (role === 'freelancer') {
      this.is_disabled_client = true
      this.is_disabled_freelancer = false;
    }

  }
  // #####################################// #####################################


  async join_as_client() {
    let loader = await this.loader.create({
      message: 'Joining as Client',
      spinner: 'lines-sharp',
      duration: 700,
      mode: 'ios'
    });
    await loader.present()
    await this.router.navigate(['/signup-as-client'])
  }
  // #####################################// #####################################

  async join_as_freelancer() {
    let loader = await this.loader.create({
      message: 'Joining as Freelancer',
      spinner: 'lines-sharp',
      duration: 700,
      mode: 'ios'
    });
    await loader.present()
    await this.router.navigate(['/signup-as-freelancer'])
  }
  // #####################################// #####################################

  async go_back() {
    let loader = await this.loader.create({
      message: 'Returning to home page...',
      spinner: 'lines-sharp',
      duration: 1000,
      mode: 'ios'
    });
    await loader.present()
    await this.router.navigate(['/home'])
  }
  // #####################################// #####################################


}
