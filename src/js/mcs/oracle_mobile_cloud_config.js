// //var mcs_config = {
// //  "logLevel": "",
// //  "mobileBackends": {
// //    "APAC_Test_Drive_Loyalty_Management_MBE": {
// //      "default": true,
// //      "baseUrl": "https://mobile-apacdemo08.mobileenv.us2.oraclecloud.com:443",
// //      "applicationKey": "628655cd-9f47-4c1d-8fd4-1953f1b5fae2",
// //      "authorization": {
// //        "basicAuth": {
// //          "backendId": "d581fb72-285d-4a46-a828-893a31c9c5ca",
// //          "anonymousToken": "QVBBQ0RFTU8wOF9NT0JJTEVfTU9CSUxFX0FOT05ZTU9VU19BUFBJRDpLcDNxaWRydG81LmZ6bA=="
// //        },
// //        "oAuth": {
// //          "clientId": "0dc0ad20-94ee-4d9f-99dd-7f64fbd80239",
// //          "clientSecret": "LSqDMaowFxKEvNTpPli9",
// //          "tokenEndpoint": "https://apacdemo08.identity.us.oraclecloud.com/oam/oauth2/tokens"
// //        },
// //        "facebookAuth":{
// //          "facebookAppId": "YOUR_FACEBOOK_APP_ID",
// //          "backendId": "YOUR_BACKEND_ID",
// //          "anonymousToken": "YOUR_BACKEND_ANONYMOUS_TOKEN"
// //        },
// //        "ssoAuth":{
// //          "clientId": "YOUR_CLIENT_ID",
// //          "clientSecret": "YOUR_ClIENT_SECRET",
// //          "tokenEndpoint": "YOUR_TOKEN_ENDPOINT"
// //        }
// //      }
// //    }
// //  }
// //};


// var mcs_config = {
//   "logLevel": "",
//   "mobileBackends": {
//     "APAC_Test_Drive_Loyalty_Management_MBE": {
//       "default": true,
//       "baseUrl": "https://mcs-gse00011678.mobileenv.us2.oraclecloud.com:443",
//       "applicationKey": "9722de7f-4ecf-443f-8e0e-714b2f6e0f9c",
//       "authorization": {
//         "basicAuth": {
//           "backendId": "4a9d0d32-8aad-48fb-b803-5315459dce9f",
//           "anonymousToken": "R1NFMDAwMTE2NzhfTUNTX01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6Smk3cXBld3lrczlfbmI="
//         },
//         "oAuth": {
//           "clientId": "f5863985-63a6-43e9-84b8-550522fcdb3c",
//           "clientSecret": "uWHNfcDEAgXJjRwaiqH4",
//           "tokenEndpoint": "https://gse00011678.identity.us.oraclecloud.com/oam/oauth2/tokens"
//         },
//         "facebookAuth":{
//           "facebookAppId": "YOUR_FACEBOOK_APP_ID",
//           "backendId": "YOUR_BACKEND_ID",
//           "anonymousToken": "YOUR_BACKEND_ANONYMOUS_TOKEN"
//         },
//         "ssoAuth":{
//           "clientId": "YOUR_CLIENT_ID",
//           "clientSecret": "YOUR_ClIENT_SECRET",
//           "tokenEndpoint": "YOUR_TOKEN_ENDPOINT"
//         }
//       }
//     }
//   }
// };


var mcs_config = {
  "logLevel": "",
  "logHTTP": true,
  "mobileBackends": {
    "Hynix_MBE": {
      "default": true,
      "baseUrl": "https://skmobile-a515187.mobileenv.us2.oraclecloud.com:443",
      "applicationKey": "18eba57f-2edd-4819-a5bf-4972ed34731d",
      "analytics": {
        "location": true
      },
      "authorization": {
        "basicAuth": {
          "backendId": "186ae657-0ef8-4947-a1bd-2b9c7b95592c",
          "anonymousToken": "QTUxNTE4N19TS01PQklMRV9NT0JJTEVfQU5PTllNT1VTX0FQUElEOnAua1J6eXdtN2V2aTZn"
        },
        "oAuth": {
          "clientId": "YOUR_CLIENT_ID",
          "clientSecret": "YOUR_ClIENT_SECRET",
          "tokenEndpoint": "YOUR_TOKEN_ENDPOINT"
        },
        "facebookAuth":{
          "facebookAppId": "YOUR_FACEBOOK_APP_ID",
          "backendId": "YOUR_BACKEND_ID",
          "anonymousToken": "YOUR_BACKEND_ANONYMOUS_TOKEN"
        },
        "ssoAuth":{
          "clientId": "YOUR_CLIENT_ID",
          "clientSecret": "YOUR_ClIENT_SECRET",
          "tokenEndpoint": "YOUR_TOKEN_ENDPOINT"
        },
        "tokenAuth":{
          "backendId": "YOUR_BACKEND_ID"
        }
      }
    }
  }
}