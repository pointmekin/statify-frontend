import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from '@ionic/angular';
import Chart from "chart.js";
import {Input} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Backend } from 'src/service/backend';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {

  rawData: any;
  notEmpty =false;
  //data: any;
  @Input() data;
  playlist_name: String;


  constructor(private route: ActivatedRoute, private router: Router, public modalController: ModalController, public http: HttpClient, public backend: Backend, public alertController: AlertController) {
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Song added to the playlist',
      message: 'Added',
      buttons: ['OK']
    });

    await alert.present();
  }

  addToPlaylist = ()=> {

    if(this.playlist_name!=undefined) {
      this.http
      .get(this.backend.getAPI() + "add_to_playlist?playlist_name=" + this.playlist_name + "&song_id=" + this.data.id)
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
