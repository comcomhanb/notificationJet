define(['jquery', 'mcs'], function ($) {
    //define MCS mobile backend connection details
    var mcs_config = {
        "logLevel": mcs.logLevelInfo,
        "mobileBackends": {
            "RedSamuraiMobile": {
                "default": true,
                "baseUrl": "https://skmobile-a515187.mobileenv.us2.oraclecloud.com:443",
                "applicationKey": "18eba57f-2edd-4819-a5bf-4972ed34731d",
                "authorization": {
        "basicAuth": {
          "backendId": "186ae657-0ef8-4947-a1bd-2b9c7b95592c",
          "anonymousToken": "QTUxNTE4N19TS01PQklMRV9NT0JJTEVfQU5PTllNT1VTX0FQUElEOnAua1J6eXdtN2V2aTZn"
        }
                }
            }
        }
    };
 
    function MobileBackend() {
        var self = this;
        self.mobileBackend;
        function init() {
            mcs.MobileBackendManager.platform = new mcs.CordovaPlatform();
            mcs.MobileBackendManager.setConfig(mcs_config);
            self.mobileBackend = mcs.MobileBackendManager.getMobileBackend('RedSamuraiMobile');
            self.mobileBackend.setAuthenticationType("basicAuth");            
        }
 
        //Handles the success and failure callbacks defined here
        //Not using anonymous login for this example but including here. 
        self.authAnonymous = function () {
            console.log("Authenticating anonymously");
            self.mobileBackend.Authorization.authenticateAnonymous(
                    function (response, data) {                        
                        console.log("Success authenticating against mobile backend");
                    },
                    function (statusCode, data) {
                        console.log("Failure authenticating against mobile backend");
                    }
            );
        };
 
        //This handles success and failure callbacks using parameters (unlike the authAnonymous example)
        self.authenticate = function (username, password, successCallback, failureCallback) {
            self.mobileBackend.Authorization.authenticate(username, password, successCallback, failureCallback);
        };
 
        //this handles success and failure callbacks using parameters
        self.logout = function (successCallback, failureCallback) {
            self.mobileBackend.Authorization.logout();
        };
 
        self.isAuthorized = function () {
            return self.mobileBackend.Authorization.isAuthorized;
        };
        
        self.registerNotification = function (registrationID, appId, appVersion) {
            self.mobileBackend.Notifications.registerForNotifications(registrationID, appId, appVersion,  
               function (statusCode, headers, data) {  
                   var success_msg = "sucess:statusCode=" + statusCode + ",data=" + data + "headers=" + headers;  
                   console.log(success_msg);  
               },  
               function (statusCode, data) {  
                   var failure_msg = "failure:statusCode=" + statusCode + ",data=" + data;  
                   console.log(failure_msg);  
               }
            );
        };
 
        init();
    }
 
    return new MobileBackend();
});