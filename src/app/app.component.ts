import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private data_service: DataService
  ) {

    this.data_service.init()

  }

  // async storage_init() {
  //   this.storage.create()
  // }

}
