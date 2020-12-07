import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Backend } from 'src/service/backend';

@Injectable()
export class CompareProvider {
  constructor(public http: HttpClient, public backend: Backend) {
    console.log("Hello MyDataProvider Provider");
  }

  compare = (itemList, query1, query2, event) => {
 
    this.http
      .get(this.backend.getAPI() + "compare?song_id1=" + query1 + "&" + "song_id2=" + query2)
      .subscribe((data: any) => {
        console.log(data)
        for (let i = 0; i < (data ? data.length : 0); i++) {
          itemList.push(data[i]);
        }
      });
  };








}


