import { Component } from '@angular/core';

import { SendPage } from '../send/send';
import { ReceivePage } from '../receive/receive';
import { HomePage } from '../home/home';

@Component({
  selector: 'tabs-text',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SendPage;
  tab3Root = ReceivePage;

  constructor() {

  }
}
