import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-paths",
  templateUrl: "./paths.component.html",
  styleUrls: ["./paths.component.css"]
})
export class PathsComponent implements OnInit {
  @Input() paths;

  constructor() {}

  ngOnInit() {}
}
