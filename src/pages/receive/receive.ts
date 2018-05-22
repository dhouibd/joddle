import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-receive',
  templateUrl: 'receive.html'
})
export class ReceivePage {

  // private latitude: double[] = [];
  // private longitude: double[] = [];
  // private pseudo: string[] = [];
  // private message: string[] = [];

  constructor(public navCtrl: NavController) {

  }

// public majMessages() {
//
//   this.messages = [];
//   // Récupérer la BDD
//   this.db.executeSql('SELECT latitude, longitude, pseudo, message FROM `MESSAGES`', {})
// 	.then((data) => {
//
// 		if(data == null) {
// 			return;
// 		}
//
// 		if(data.rows) {
// 			if(data.rows.length > 0) {
// 				for(var i = 0; i < data.rows.length; i++) {
//           this.latitude.push(data.rows.item(i).latitude);
//           this.longitude.push(data.rows.item(i).longitude);
//           this.pseudo.push(data.rows.item(i).pseudo);
//           this.message.push(data.rows.item(i).message);
//         }
// 			}
// 		}
// 	});
// }

}
