import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from '@ionic/angular';
import Chart from "chart.js";
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  myId = "1234";
  rawData: any;

  data: any;
  //formattedDate: Number

  constructor(private route: ActivatedRoute, private router: Router, public modalController: ModalController) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;
        console.log(this.data);
        this.rawData = JSON.stringify(this.data);
      }
    });
  }

  setSpotifyLink = () => {
    document.getElementById("spotify-button").setAttribute("href","https://open.spotify.com/track/" + this.data.id);
  }

  addToPlaylist = () => {

  }

  async presentModal(data) {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      cssClass: 'my-custom-class',
      componentProps: {
        'data': data
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.createGraph(this.data)
    this.setSpotifyLink()
  }

  createGraph = (data) => {
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
      type: "radar",
      fontSize: 3,
      data: {
        labels: [
          "Valence",
          "Acousticness",
          "Danceability",
          "Energy",
          "Instrumentalness",
          "Liveness",
          "Speechiness",
        ],
        datasets: [
          {
            label: data.name,
            backgroundColor: "rgba(30,215,96,0.7)",
            data: [
              data.valence,
              data.acousticness,
              data.danceability,
              data.energy,
              data.instrumentalness,
              data.liveness,
              data.speechiness,
            ],
            borderColor: "rgba(255,255,255,0.7)",
          },
        ],
      },
      pointLabelFontSize: 20,
      borderColor: "rgba(255,255,255,0.9)",
      options: {
        legends: {
          labels: {
            fontSize: 3,
          },
        },
        scale: {
          scaleLabel: { fontSize: 5 },
          angleLines: {
            display: false,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 1,
          },
        },
      },
    });
  };
}
