import {Component} from "@angular/core";
import {UserLoginService} from "../../service/user-login.service";
import {Callback, CognitoUtil, LoggedInCallback} from "../../service/cognito.service";
import {UserParametersService} from "../../service/user-parameters.service";
import {Router,ActivatedRoute} from "@angular/router";

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './callback.html'
})
export class WinkCallbackComponent implements LoggedInCallback {

    public cognitoId: String;
    private winkauthcode: string;

    constructor(public router: Router, public userService: UserLoginService, public userParams: UserParametersService, public cognitoUtil: CognitoUtil, private route: ActivatedRoute) {
        this.userService.isAuthenticated(this);
        console.log("In WinkComponent");
    }

    ngOnInit() {
      // Capture the access token and code
      this.route
          .queryParams
          .subscribe(params => {
              this.winkauthcode = params['code'];
          });

        console.log('wink: '+ this.winkauthcode);
        this.userParams.setWinkToken(this.winkauthcode, new SetWinkTokenCallback(this, this.cognitoUtil));
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
            console.log('logged in and ' + this.winkauthcode);
        }
    }
}

export class SetWinkTokenCallback implements Callback {

    constructor(public me: WinkCallbackComponent, public cognitoUtil: CognitoUtil) {

    }

    callback() {
        console.log('linked');
    }

    callbackWithParam(result: any) {
        console.log('linked nwp');
    }
}
