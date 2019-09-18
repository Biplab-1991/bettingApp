import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../_services/index';

@Component({
    moduleId: module.id,
    selector: 'loader',
    templateUrl: 'loader.component.html'
})

export class LoaderComponent {
    
    show: boolean;
    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getLoader().subscribe((res) => {
            //console.log(res);
            this.show = res.data;
        });
    }

    
}