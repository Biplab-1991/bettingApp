import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { LocalStorageService, LocalStorage } from 'ng2-webstorage';
import { LoginService } from '../login.service';
import { Router } from "@angular/router";
//import { EventsModule, EventsService } from 'angular4-events';
import { AlertService } from '../_services/index';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  constructor(public loginService: LoginService, private router: Router, public alertService: AlertService) { 
    this.username = "betting@webgentechnologies.com";
    this.password = "betting@12345";
  }

  ngOnInit() {
  }

  onSubmit() {
    var data = {
      username: this.username,
      password:this.password
    }
    this.alertService.loader(true);
    this.loginService.login(data).subscribe((res) => {
      if (res.status) {
        this.alertService.loader(false);
        //this.eventsService.publish('login','true');
        localStorage.setItem('swswaswedee', 'true');
        this.router.navigate(['']);
        location.reload();
      } else {
        this.alertService.loader(false);
        this.alertService.error(res.message);
      }
    })
  }
}
