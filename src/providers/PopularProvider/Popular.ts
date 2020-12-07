import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import {Backend} from '../../service/backend'


@Injectable()
export class PopularProvider {
  constructor(public http: HttpClient, public backend:Backend) {
    console.log("Hello MyDataProvider Provider");
  }

  popularity: number = 100;
  

  getData = (itemList, id, event) => {
    console.log("GETTING INFO")
    this.http
      .get(this.backend.getAPI() +"get_popular?popularity=" + this.popularity)
      .subscribe((data: any) => {
        console.log(data)
        for (let i = 0; i < (data ? data.length : 0); i++) {
          itemList.push(data[i]);
          this.popularity = data[19]["popularity"];
        }
        if (id != 0) {
          console.log("1 triggered")
          event.target.complete();
        }
        if (data.length !== 20) {
          console.log("2 triggered")
          event.target.complete();
        }
      });
  };
}
