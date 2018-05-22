import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SendPage } from '../send/send';
import { ReceivePage } from '../receive/receive';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const DATABASE_FILE_NAME: string = 'data.db';

@Component({
  selector: 'page-text',
  templateUrl: 'text.html'
})
export class TextPage {

  private db: SQLiteObject;
  private latitude: double;
  private longitude: double;
  private pseudo: string;
  private message: string;

  constructor(public navCtrl: NavController) {

  }

  // public saveMyFilm() {
  //   console.log('Movie name -> ' + this.titleMovie);
  //   console.log('Rating -> ' + this.ratingMovie + '/5');
  //   console.log('Description -> ' + this.descriptionMovie);
  //   console.log('Categorie -> ' + this.categorieMovie);
  //
  //   // INSERT INTO `CATEGORIES` (name) VALUES('Test');
  //   // INSERT INTO `MOVIES`(name, eval, desc, categoryId) VALUES ('Nom film', 3, 'Description', 1)
  //   this.db.executeSql('INSERT INTO `CATEGORIES` (name) VALUES(\'' + this.categorieMovie + '\')', {})
  //     .then(() => {
  //       console.log('Categorie inserted !');
  //
  //       this.db.executeSql('INSERT INTO `MOVIES`(name, eval, desc, categoryId) VALUES (\'' + this.titleMovie + '\', '+ this.ratingMovie +', \''+ this.descriptionMovie +'\', last_insert_rowid())', {})
  //       .then(() => console.log('Movie inserted !'))
  //       .catch(e => console.log(e));
  //
  //     })
  //     .catch(e => console.log(e));
  // }


  sendText() {
    // Récupérer les coordonnees géographiques
    // Faire une alerte pour dire que le message s'est bien envoyé
    this.navCtrl.pop(SendPage);
    this.navCtrl.push(ReceivePage);
  }

}
