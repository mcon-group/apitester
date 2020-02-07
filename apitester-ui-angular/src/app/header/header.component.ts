import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() onSearchChange = new EventEmitter<string>();

  constructor() {}

  handleSearchChange(input) {
    const path = input.target.value;
    console.log("THE SEARCH BAR INPUT : ", path);
    this.onSearchChange.emit(path);
  }

  ngOnInit() {}
}
