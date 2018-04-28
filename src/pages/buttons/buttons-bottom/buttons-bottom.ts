import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the ButtonsBottomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buttons-bottom',
  templateUrl: 'buttons-bottom.html',
})
export class ButtonsBottomPage {
  commentText: string;
  showFuncMenu: boolean = false;

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ButtonsBottomPage');
  }
  toggleFuncMenu() {
    this.showFuncMenu = !this.showFuncMenu;
    this.content.resize();
  }
}
