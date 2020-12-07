import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import {Backend} from '../../service/backend'


@Injectable()
export class PlaylistListsProvider {
  constructor(public http: HttpClient, public backend: Backend) {
    console.log("Hello MyDataProvider Provider");
  }

  

  

  getSearch = (itemList, event) => {

    this.http
      .get(this.backend.getAPI() + "all_playlists")
      .subscribe((data: any) => {
        console.log(data)
        for (let i = 0; i < (data ? data.length : 0); i++) {
          itemList.push(data[i]);
        }
      });
  };








}


