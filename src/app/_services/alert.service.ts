import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Alert, AlertType } from '../_models/alert';
//import { LocalStorageService, LocalStorage } from 'ng2-webstorage';

@Injectable()
export class AlertService {
    private subject = new Subject<Alert>();
    private loadersub = new Subject();
    private checksub = new Subject();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    getLoader(): Observable<any> {
        return this.loadersub.asObservable();
    }

    getcheck(): Observable<any> {
        return this.checksub.asObservable();
    }

    success(message: string, keepAfterRouteChange = false) {
        
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }

    error(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }

    info(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }

    warn(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }

    alert(type: AlertType, message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(<Alert>{ type: type, message: message });
    }

    loader(data: boolean) {
        this.loadersub.next({data:data});
    }

    clear() {
        // clear alerts
        this.subject.next();
    }

    checkaccess() {
        let login = localStorage.getItem('swswaswedee');
        return login;
    }
}