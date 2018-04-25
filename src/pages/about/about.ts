import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { publications } from '../../mocks/publications.mocks';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  publications = publications;

  getPublications(event: any) {
    if (event.target.value) {
      let toast = this.toastCtrl.create({
        message: "Buscando: " + event.target.value,
        duration: 500,
        position: 'middle'
      });
      toast.present();
    }
  }

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {

  }

}
