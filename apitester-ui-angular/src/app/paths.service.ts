import { Restangular } from "ngx-restangular";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PathsService {
  constructor(private restAngular: Restangular) {}

  getPaths() {
    return this.restAngular.one("apitester/paths").get();
  }
}
