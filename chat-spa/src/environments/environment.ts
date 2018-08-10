// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBF5foLR3BzFhyIiIxKJzyzZDG-79M1T5w',
    authDomain: 'chat-97ddc.firebaseapp.com',
    databaseURL: 'https://chat-97ddc.firebaseio.com',
    projectId: 'chat-97ddc',
    storageBucket: 'chat-97ddc.appspot.com',
    messagingSenderId: '145613974570'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
