import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class LivefeedService {
  API_URL: any;
  constructor(public http: Http) {
    this.API_URL = 'http://52.42.14.183:43650/api';
  }
  private url = 'http://52.42.14.183:43650';
  private socket;

  // joinchat(obj) {
  //   console.log(obj);
  //   this.socket.emit('join', obj);
  // }
  // sendMessage(message) {
  //   this.socket.emit('createMessage', {
  //     text: message
  //   });
  // }
  // sendMessagewithatt(message) {
  //   this.socket.emit('createMessage', {
  //     text: 'xxx',
  //     img: message
  //   });
  // }

  getLivefeed() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('feed', (data) => {
        //console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getlive(): Observable<any> {
    const url: string = `${this.API_URL}/getfeed`;
    return this.http.get(url)
      .map(res => <any>res.json());
  }
  // getTyping() {
  //   let observable = new Observable(observer => {
  //     this.socket = io(this.url);
  //     this.socket.on('type', (data) => {
  //       observer.next(data);
  //     });
  //     return () => {
  //       this.socket.disconnect();
  //     };
  //   })
  //   return observable;
  // }
}
