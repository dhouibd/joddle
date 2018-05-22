import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SendPage } from '../pages/send/send';
import { ReceivePage } from '../pages/receive/receive';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TextPage } from '../pages/text/text';
// import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SendPage,
    ReceivePage,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    TextPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Contacts
  ],
  exports: [],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SendPage,
    ReceivePage,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    TextPage,
    // Contact
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
