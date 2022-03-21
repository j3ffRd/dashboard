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
