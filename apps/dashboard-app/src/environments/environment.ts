// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AppConfiguration } from '@dashboard-core';

export const environment: AppConfiguration = {
  production: false,
  baseUrl: 'https://myserver:5000',
  firebase: {
    projectId: '__firebase_projectId__',
    appId: '__firebase_appId__',
    storageBucket: '__firebase_storageBucket__',
    apiKey: '__firebase_apiKey__',
    authDomain: '__firebase_authDomain__',
    messagingSenderId: '__firebase_messagingSenderId__',
    measurementId: '__firebase_measurementId__',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
