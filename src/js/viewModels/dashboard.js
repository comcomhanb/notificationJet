  /**
   * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   */
  /*
   * Your dashboard ViewModel code goes here
   */
  define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'mbe','ojs/ojbutton', 'ojs/ojinputtext'],
   function(oj, ko, $, app, mbe) {
    
      function DashboardViewModel() {
        var self = this;

        // Header Config
        self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};
        self.isLoggedIn = ko.observable(false);
        self.username = ko.observable("sung.hye.jeon@oracle.com");
        self.password = ko.observable("hello");
        
        self.appId = ko.observable("org.oraclejet.notification");
        self.appVersion = ko.observable("1.0.0");
        self.androidSenderId = ko.observable("624780927984");


        self.login = function () {
            self.loginSuccess();
        };
          
        self.logout = function () {
            mbe.logout();
            self.isLoggedIn(false);
        };
          
        self.loginSuccess = function (response, data) {               
            self.isLoggedIn(true);
            self.registerNotification();
        };

        self.loginFailure = function (statusCode) {
            self.isLoggedIn(false);
            alert("Invalid username/password");
        };
        self.registerNotification = function () {
        console.log("Notification register...");
                console.log("self.appId() : ", self.appId());

        try {
          var push = PushNotification.init({
                              android: {
                                  senderID: self.androidSenderId()
                              },
                              browser: {
                                  pushServiceURL: 'http://push.api.phonegap.com/v1/push'
                              },
                              ios: {
                                  alert: "true",
                                  badge: "true",
                                  sound: "false"
                              },
                              windows: {}
                          });

                          push.on('registration', function (data) {
                              //settings.deviceToken(data.registrationId);
                              //settings.registrationId(data.registrationId);
  //                            alert(data.registrationId);
                          console.log("push.on('registration' :::::::: " + data);

                              try {
                                  mbe.registerForNotifications(data.registrationId, self.appId(), self.appVersion(),
                                          function (statusCode, headers, data) {
                                              self.isLoadingfinished(false);
        console.log("Notification register... successing ", data.registrationId);

                                          }, function (statusCode, data) {
        console.log("Notification register... failing", data.registrationId);

                                      alert("Register device fail!");
                                  });
                              } catch (e) {
                                  self.isLoadingfinished(false);
                                  alert("Register device encounter an exceptionL " + e.message
                                          );
                              }
                          });

                          push.on('notification', function (data) {
                              try {
                                  alert("Push Notification from Oracle MCS: " + data.message);  
                              } catch (e) {
                                  console.log("no ID in notification");
                              }
                          });

                          push.on('error', function (e) {
                              alert("You can not access google at this time, try to use a google accessable phone like HUAWEI", "Error");
                          });
                      } catch (e) {
                          alert("You can not access google at this time, try to use a google accessable phone like HUAWEI", "Error");
                      }
                  };       
        self.handleActivated = function(info) {
          // Implement if needed
        };

        /**
         * Optional ViewModel method invoked after the View is inserted into the
         * document DOM.  The application can put logic that requires the DOM being
         * attached here.
         * @param {Object} info - An object with the following key-value pairs:
         * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
         * @param {Function} info.valueAccessor - The binding's value accessor.
         * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
         */
        self.handleAttached = function(info) {
          // Implement if needed
        };


        /**
         * Optional ViewModel method invoked after the bindings are applied on this View. 
         * If the current View is retrieved from cache, the bindings will not be re-applied
         * and this callback will not be invoked.
         * @param {Object} info - An object with the following key-value pairs:
         * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
         * @param {Function} info.valueAccessor - The binding's value accessor.
         */
        self.handleBindingsApplied = function(info) {
          // Implement if needed
        };

        /*
         * Optional ViewModel method invoked after the View is removed from the
         * document DOM.
         * @param {Object} info - An object with the following key-value pairs:
         * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
         * @param {Function} info.valueAccessor - The binding's value accessor.
         * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
         */
        self.handleDetached = function(info) {
          // Implement if needed
        };
      }

      /*
       * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
       * each time the view is displayed.  Return an instance of the ViewModel if
       * only one instance of the ViewModel is needed.
       */
      return new DashboardViewModel();
    }
  );
