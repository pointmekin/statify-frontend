import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAddPlaylistPage } from './modal-add-playlist.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAddPlaylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAddPlaylistPageRoutingModule {}
