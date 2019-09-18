import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
//import { LocalStorageService, LocalStorage } from 'ng2-webstorage';
import { AlertService } from './_services/index';
//import { routerLink} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedout: boolean;
  loggedin: boolean;
  title = 'app';
  constructor(public alertService: AlertService) {
    if (localStorage.getItem('swswaswedee')) {
      this.loggedout = false;
      this.loggedin = true;
    } else {
      this.loggedout = true;
      this.loggedin = false;
    }
  }

  ngOnInit() {
    this.alertService.loader(true);
  }

  ngAfterContentChecked() {
    this.alertService.loader(false);
  }
}
