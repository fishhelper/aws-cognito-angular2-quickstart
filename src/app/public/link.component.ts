import {Component, OnInit} from "@angular/core";

declare let AWS: any;
declare let AWSCognito: any;

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './landinglink.html'
})
export class LinkLandingComponent {
    constructor() {
        console.log("LinkLandingComponent constructor");
    }
}

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './link.html'
})
export class LinkComponent implements OnInit {

    constructor() {
        console.log("LinkComponent constructor");
    }

    ngOnInit() {

    }
}
