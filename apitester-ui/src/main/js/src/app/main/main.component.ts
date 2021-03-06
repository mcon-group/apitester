import { PathsService } from "../paths.service";
import { Component, OnInit } from "@angular/core";
import { _ } from "underscore";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  title = "apitester-ui";

  private paths: any = [];
  filtredPaths: any = [];

  constructor(private pathService: PathsService) {}

  ngOnInit() {
    this.pathService.getPaths().subscribe(response => {
      this.paths = response.data;
      this.filtredPaths = [...this.paths];
    });
  }

  handleSearchPathChange(searchedPath: String) {
    this.filtredPaths = [];

    _.each(this.paths, path => {
      if (path.path.indexOf(searchedPath) > -1) {
        this.filtredPaths.push(path);
      }
    });
  }
}
