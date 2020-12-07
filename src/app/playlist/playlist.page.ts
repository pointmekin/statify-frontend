import { Component } from "@angular/core";
import { ModalController, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from "@angular/router";
import { SearchProvider } from 'src/providers/SearchProvider/Search';
import { PlaylistListsProvider } from 'src/providers/PlaylistsListsProvider/PlaylistsList';
import { ModalAddPlaylistPage } from '../modal-add-playlist/modal-add-playlist.page';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage {

  itemListData = [];


  constructor(
    private router: Router,
    public playlistListsProvider: PlaylistListsProvider,
    public navCtrl: NavController,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.onSearch()
  }

  onSearch() {
    this.playlistListsProvider.getSearch(this.itemListData, event);
  }

  goToDetails = (item) => {
    let navigationExtras: NavigationExtras = {
      state: {
        ...item
      },
    };
    this.router.navigate(["playlist-details"], navigationExtras);
  };

  async presentModal(data) {
    const modal = await this.modalController.create({
      component: ModalAddPlaylistPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

}
