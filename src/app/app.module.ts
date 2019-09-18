import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

import { LoginService } from './login.service';
import { LivefeedService } from './livefeed.service';
//import { LocalStorageService } from 'ng2-webstorage';
//import { EventsModule, EventsService } from 'angular4-events';

import { AlertComponent } from './_directives/index';
import { LoaderComponent } from './_directives/loader/index';
import { AlertService } from './_services/index';
import { LiveComponent } from './live/live.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import { Ng2OrderModule } from 'ng2-order-pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, 
  { path: 'Home', component: HomeComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Live', component: LiveComponent }
];  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    AlertComponent,
    LoaderComponent,
    LiveComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule, Ng2OrderModule
  ],
  providers: [LoginService, AlertService, LivefeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
