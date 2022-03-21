export interface AppConfiguration {
  production: boolean;
  baseUrl: string;
  firebase: FireBaseConfig;
}

export interface FireBaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
