import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string="Joao das Couves";
  public data_publicacao:string="março 15, 2018";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   public somaDoisNumeros(a:number,b:number):void{
     alert(a+b);
   }
  ionViewDidLoad() {
    //this.somaDoisNumeros(1,2);
    console.log('ionViewDidLoad FeedPage');
  }

}
