import { Component } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';
//import {Camera} from '@ionic-native/camera';
import { Camera, CameraOptions, CameraPopoverOptions } from '@ionic-native/camera';
import { TextPage } from '../text/text';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';


@Component({
  selector: 'page-send',
  providers: [Camera,Storage],
  templateUrl: 'send.html'
})
export class SendPage {

  // imageURL
  public contactsFound: any;
  public search: any;


  constructor(public navCtrl: NavController, private camera: Camera, private contacts: Contacts) {
    this.contactsFound = [];
  }

    options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    popover: CameraPopoverOptions = {
      x: 20,
      y: 60,
      width: 200,
      height: 100,
      arrowDir: 1
    }


    // takePhoto(){
    //   this.camera.getPicture(this.options).then((imageData) => {
    //      this.imageURL = 'data:image/jpeg;base64,' + imageData;
    //   }, (err) => {
    //      console.log(err);
    //   });
    // }

    enterText() {
      this.navCtrl.push(TextPage);
    }

    importContact() {
      Contacts.find(['*'], {filter: "",multiple:true})
      .then((contacts) => {
              this.contactsFound = contacts;
            });
    }

}
