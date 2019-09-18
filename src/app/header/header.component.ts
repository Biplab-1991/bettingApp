import { Component, OnInit } from '@angular/core';
//import { LocalStorageService, LocalStorage } from 'ng2-webstorage';
import { Router } from "@angular/router";
//import { EventsModule, EventsService } from 'angular4-events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedout: boolean;
  loggedin: boolean;
  constructor(private router: Router) { 
    if (localStorage.getItem('swswaswedee')=='true') {
      
    } else {
      localStorage.setItem('swswaswedee', 'false');
    }
  }

  ngOnInit() {
    let login = localStorage.getItem('swswaswedee');
    if (login == 'true') {
      this.loggedout = false;
      this.loggedin = true;
    } else {
      this.loggedout = true;
      this.loggedin = false;
    }
    // this.eventsService.subscribe('login').subscribe((res) => {
    //   if (res) {
    //     this.loggedout = false;
    //     this.loggedin = true;
    //   } else {
    //     this.loggedout = true;
    //     this.loggedin = false;
    //   }
    // })
    //console.log(login);
  }

  logout() {
    //this.eventsService.publish('login', 'true');
    localStorage.setItem('swswaswedee', 'false');
    location.reload();
    //this.router.navigate(['Login']);
  }

}
