import {Injectable} from "@angular/core";
import {Callback, CognitoUtil} from "./cognito.service";
import {
    CognitoUserAttribute
} from "amazon-cognito-identity-js";

@Injectable()
export class UserParametersService {

    constructor(public cognitoUtil: CognitoUtil) {
    }

    getParameters(callback: Callback) {
        let cognitoUser = this.cognitoUtil.getCurrentUser();

        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                if (err)
                    console.log("UserParametersService: Couldn't retrieve the user");
                else {
                    cognitoUser.getUserAttributes(function (err, result) {
                        if (err) {
                            console.log("UserParametersService: in getParameters: " + err);
                        } else {
                            callback.callbackWithParam(result);
                        }
                    });
                }

            });
        } else {
            callback.callbackWithParam(null);
        }
    }

    setWinkToken(token: string, callback: Callback) {
        let cognitoUser = this.cognitoUtil.getCurrentUser();

        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                if (err)
                    console.log("UserParametersService: Couldn't retrieve the user");
                else {
                var attributeList = [];
                var attribute = {
                Name : 'custom:winktoken',
                Value : token
                };
                var a = new CognitoUserAttribute(attribute);
                attributeList.push(a);
                console.log(attribute);
                cognitoUser.updateAttributes(attributeList, function(err, result) {
                if (err) {
                    console.log("UserParametersService: in setWinkToken: " + err);
                } else {
                    callback.callbackWithParam(result);
                }
                });
                }
            });
        } else {
            callback.callbackWithParam(null);
        }
    }
}
