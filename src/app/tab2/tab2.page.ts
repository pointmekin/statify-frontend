import { Component } from "@angular/core";
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from "@angular/router";
import { SearchProvider } from 'src/providers/SearchProvider/Search';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  itemListData = [];
  query:String;
  rawData: String;

  constructor(
    private router: Router,
    public searchProvider: SearchProvider,
    public navCtrl: NavController
  ) {}

  goToDetails = (item) => {
    let navigationExtras: NavigationExtras = {
      state: {
        ...item
      },
    };
    this.router.navigate(["detail"], navigationExtras);
  };

  ngOnInit() {
    console.log("TRIGGERED")
  }

  onSearch() {
    this.itemListData = []
    this.searchProvider.getSearch(this.itemListData, this.query, event);
  }

  showRawData() {
    
    this.rawData = JSON.stringify(this.itemListData)
    console.log(this.rawData)

  }

}
