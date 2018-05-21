import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private username: string;
  private password: string;

  private usernameTest: string = 'toto';
  private passwordTest: string = 'dodo';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    if(this.username == this.usernameTest && this.password == this.passwordTest) {
      this.navCtrl.setRoot(TabsPage);
    }


    // this.navCtrl.push(TabsPage);
  }

}
