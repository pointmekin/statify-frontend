import { Component } from "@angular/core";
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { SearchProvider } from 'src/providers/SearchProvider/Search';
import { PlaylistDetailsProvider } from 'src/providers/PlaylistsListsProvider/PlaylistDetails';


@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.page.html',
  styleUrls: ['./playlist-details.page.scss'],
})
export class PlaylistDetailsPage {

  itemListData = [];
  query:String;

  data: any;

  constructor(
    private router: Router,
    public playlistDetailsProvider: PlaylistDetailsProvider,
    public navCtrl: NavController,
    private route: ActivatedRoute
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state;
      console.log(this.data);
      //this.rawData = JSON.stringify(this.data);
    }
  }

  ngOnInit() {
    this.onSearch();
  }

  onSearch() {
    this.playlistDetailsProvider.getSearch(this.itemListData, this.data.playlist_name, event);
  }

  goToDetails = (item) => {
    let navigationExtras: NavigationExtras = {
      state: {
        ...item
      },
    };
    this.router.navigate(["detail"], navigationExtras);
  };

}
