import { Component } from '@angular/core';
import { NavController, ToastController, AlertController, ActionSheetController } from 'ionic-angular';
import { publications } from '../../mocks/publications.mocks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  publications = publications;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private alertCtrl: AlertController, private actionSheetCtrl: ActionSheetController) {

  }

  like() {

    let toast = this.toastCtrl.create({
      message: 'Like',
      duration: 1000,
      position: 'middle'
    });
    toast.present();
  }

  commentPicture() {
    let prompt = this.alertCtrl.create({
      title: 'Comentario',
      message: "Ingrese el comentario que harás a la fotografía.",
      inputs: [
        {
          name: 'comment',
          placeholder: 'Comentario'
        },
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Comentar',
          handler: data => {
            let toast = this.toastCtrl.create({
              message: 'Comentario agregado',
              duration: 800,
              position: 'middle'
            });
            toast.present();
          }
        }
      ]
    });
    prompt.present();
  }

  sharedPicture() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Enviar a...',
      buttons: [
        {
          text: 'Homero',
          icon: 'md-send',
          handler: () => {
            console.log('Compartido con Homero');
          }
        }, {
          icon: 'md-send',
          text: 'Chaozu',
          handler: () => {
            console.log('Compartido con chaozu');
          }
        }, {
          icon: 'md-send',
          text: 'Naruto',
          handler: () => {
            console.log('Compartido con Naruto');
          }
        }
      ]
    });
    actionSheet.present();
  }

  savePicture() {

    let toast = this.toastCtrl.create({
      message: 'Imagen guardada',
      duration: 1000,
      position: 'middle'
    });
    toast.present();
  }

}
