import { Component } from "@angular/core";
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from "@angular/router";
import { PopularProvider } from "src/providers/PopularProvider/Popular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(
    private router: Router,
    public popularProvider: PopularProvider,
    public navCtrl: NavController
  ) {}

  id = 0;
  newid = 0;
  itemListData = [];
  pageNumber = 0;
  lastID = 0;

  goToDetails = (item) => {
    console.log(item.release_date)
    let navigationExtras: NavigationExtras = {
      state: {
        ...item
      },
    };
    this.router.navigate(["detail"], navigationExtras);
  };

  ngOnInit() {
    console.log("TRIGGERED")
    this.popularProvider.getData(this.itemListData, 0, event);
  }

  doInfinite(event) {
    this.pageNumber++;
    this.popularProvider.getData(
      this.itemListData,
      this.pageNumber * 20,
      event
    );
  }

  showStat() {
    var x = document.getElementById("fill");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
}
