import {Component} from "@angular/core";
import {UserLoginService} from "../../service/user-login.service";
import {Callback, CognitoUtil, LoggedInCallback} from "../../service/cognito.service";
import {UserParametersService} from "../../service/user-parameters.service";
import {Router} from "@angular/router";

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './wink.html'
})
export class WinkComponent implements LoggedInCallback {

    public cognitoId: String;

    constructor(public router: Router, public userService: UserLoginService, public userParams: UserParametersService, public cognitoUtil: CognitoUtil) {
        this.userService.isAuthenticated(this);
        console.log("In WinkComponent");
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/link/login']);
        } else {
            console.log('logged in');
        }
    }
}
