import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ButtonsTopPage } from './buttons-top/buttons-top';
import { ButtonsBottomPage } from './buttons-bottom/buttons-bottom';

/**
 * Generated class for the ButtonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html',
})
export class ButtonsPage {
  buttonsTopPage = ButtonsTopPage;
  buttonsBottomPage = ButtonsBottomPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ButtonsPage');
  }
  gotoPage(page){
    this.navCtrl.push(page);
  }
}
