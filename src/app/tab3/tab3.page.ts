import { Component } from "@angular/core";
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import Chart from "chart.js";
import { CompareProvider } from 'src/providers/CompareProvider/Compare';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  itemListData = [];

  query1: String;
  query2: String;

  info1: any;
  info2: any;

  compared = false;



  rawData;

  constructor(
    private router: Router,
    public compareProvider: CompareProvider,
    public navCtrl: NavController,
    public http: HttpClient
  ) {}

  ngOnInit() {
    this.toggle()
    let visualizeButton = document.getElementById("visualize-button");
    visualizeButton.style.display = "none";
  }

  onCompare = () => {
    this.itemListData = []
    this.compareProvider.compare(this.itemListData, this.query1, this.query2, event)
    //this.rawData = JSON.stringify(this.itemListData);
    let visualizeButton = document.getElementById("visualize-button");
    visualizeButton.style.display = "block";
    
  }

  visualize = () => {
    this.toggle()
    //this.finishedLoading = true;
    console.log(this.itemListData)
    this.createGraph(this.itemListData);
  }

  toggle() {
    var x = document.getElementById("comparison");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  showRawData() {
    
    this.rawData = JSON.stringify(this.itemListData)
    console.log(this.rawData)

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
            label: data[0].name,
            backgroundColor: "rgba(30,123,80,0.7)",
            data: [
              data[0].valence,
              data[0].acousticness,
              data[0].danceability,
              data[0].energy,
              data[0].instrumentalness,
              data[0].liveness,
              data[0].speechiness,
            ],
            borderColor: "rgba(255,255,255,0.7)",
          },
          {
            label: data[1].name,
            backgroundColor: "rgba(30,215,96,0.7)",
            data: [
              data[1].valence,
              data[1].acousticness,
              data[1].danceability,
              data[1].energy,
              data[1].instrumentalness,
              data[1].liveness,
              data[1].speechiness,
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
