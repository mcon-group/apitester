import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() onSearchChange = new EventEmitter<string>();

  private path;

  constructor() {}

  handleSearchChange() {
    this.onSearchChange.emit(this.path);
  }

  ngOnInit() {}
}
