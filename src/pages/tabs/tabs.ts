import { Component } from '@angular/core';

import { SendPage } from '../send/send';
import { ReceivePage } from '../receive/receive';
import { HomePage } from '../home/home';
import { Contacts, Contact, ContactFieldType, ContactName } from '@ionic-native/contacts';


@Component({
  selector: 'tabs-text',
  templateUrl: 'tabs.html',
  providers: [
  Contact,
  Contacts
  ]
})
export class TabsPage {

  contactsFound = [];

  tab1Root = HomePage;
  tab2Root = SendPage;
  tab3Root = ReceivePage;

  constructor(private contacts: Contacts) {
    this.fetchDeviceContact('');
  }

  fetchDeviceContact(g){

	 	var options = {
		    filter : g,
		    multiple:true,
		    hasPhoneNumber:true
		};

    this.contacts.find(["displayName"], options).then((conts) => {
      this.contactsFound = conts;
      for(var contact of conts) {
        // On parcourt tous les contacts afin de les ajouter dans la BDD
      }
    })
    
}
