import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAddPlaylistPageRoutingModule } from './modal-add-playlist-routing.module';

import { ModalAddPlaylistPage } from './modal-add-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAddPlaylistPageRoutingModule
  ],
  declarations: [ModalAddPlaylistPage]
})
export class ModalAddPlaylistPageModule {}
