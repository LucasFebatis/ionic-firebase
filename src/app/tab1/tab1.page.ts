import { Component } from '@angular/core';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';
import { FirebaseCrashlytics } from '@ionic-native/firebase-crashlytics/ngx';
import { EventLoggerService } from '../services/event-logger.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private firebaseMessaging: FirebaseMessaging, private firebaseCrashlytics: FirebaseCrashlytics, public logger: EventLoggerService) {

    // FirebaseMessaging

    this.firebaseMessaging.getToken().then(function (token) {
      console.log("Got device token: ", token);
    });

    this.firebaseMessaging.onMessage().subscribe(function (payload) {
      console.log("New foreground FCM message: ", payload);
    });

    this.firebaseMessaging.onBackgroundMessage().subscribe(function (payload) {
      console.log("New background FCM message: ", payload);
    });


  }

  logClick() {
    this.logger.logButton('firebaseEventBtn', { pram: "paramValue" })
    console.log('Fui clicado!');
  }

  crashClick() {
    const crashlytics = this.firebaseCrashlytics.initialise();
    crashlytics.logException('my caught exception');
  }

}
