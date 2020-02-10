import { Component, OnInit, Input } from "@angular/core";
import { _ } from "underscore";

@Component({
  selector: "app-path",
  templateUrl: "./path.component.html",
  styleUrls: ["./path.component.css"]
})
export class PathComponent implements OnInit {
  @Input() path;

  private isMethodSelected = false;
  private currentMethodName: string;
  private selectedMappings: any;

  constructor() {}

  ngOnInit() {}

  handleMethodClick(method) {
    this.selectedMappings = [];

    _.each(this.path.mappings, mapping => {
      if (mapping.method === method) {
        this.selectedMappings.push(mapping);
      }
    });

    if (method === this.currentMethodName) {
      this.isMethodSelected = !this.isMethodSelected;
    } else {
      this.currentMethodName = method;
      this.isMethodSelected = true;
    }
  }

  handleArrowClick() {
    if (this.currentMethodName) this.isMethodSelected = !this.isMethodSelected;
  }
}
