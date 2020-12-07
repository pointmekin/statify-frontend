import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import {Backend} from '../../service/backend'


@Injectable()
export class PlaylistDetailsProvider {
  constructor(public http: HttpClient, public backend: Backend) {
    console.log("Hello MyDataProvider Provider");
  }

  

  

  getSearch = (itemList, query, event) => {

    this.http
      .get(this.backend.getAPI() + "get_playlist?playlist_name=" + query)
      .subscribe((data: any) => {
        console.log(data)
        for (let i = 0; i < (data ? data.length : 0); i++) {
          itemList.push(data[i]);
        }
      });
  };








}


