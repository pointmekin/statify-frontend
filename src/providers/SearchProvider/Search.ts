import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import {Backend} from '../../service/backend'


@Injectable()
export class SearchProvider {
  constructor(public http: HttpClient, public backend: Backend) {
    console.log("Hello MyDataProvider Provider");
  }

  

  

  getSearch = (itemList, query, event) => {
    console.log("Query is: " + query)
    this.http
      .get(this.backend.getAPI() + "/get?name=" + query)
      .subscribe((data: any) => {
        console.log(data)
        for (let i = 0; i < (data ? data.length : 0); i++) {
          itemList.push(data[i]);
        }
      });
  };








}


