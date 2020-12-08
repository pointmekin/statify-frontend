import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from '@ionic/angular';
import Chart from "chart.js";
import {Input} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Backend } from 'src/service/backend';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal-add-playlist',
  templateUrl: './modal-add-playlist.page.html',
  styleUrls: ['./modal-add-playlist.page.scss'],
})
export class ModalAddPlaylistPage implements OnInit {

  playlist_name: String;

  constructor(private route: ActivatedRoute, private router: Router, public modalController: ModalController, public http: HttpClient, public backend: Backend, public alertController: AlertController) {
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Created public playlist',
      message: 'Added',
      buttons: ['OK']
    });

    await alert.present();
  }

  

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  addToPlaylist = ()=> {

    if(this.playlist_name!=undefined) {
      this.http
      .get(this.backend.getAPI() +"create_playlist?playlist_name=" + this.playlist_name)
      .subscribe((data: any) => {
        console.log(data)
        if(data.status == 200){
          this.dismiss()
        }

        // for (let i = 0; i < (data ? data.length : 0); i++) {
        //   itemList.push(data[i]);
        // }
      });
      this.presentAlert()

      this.dismiss()
    }
  }

}
