import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-method-header",
  templateUrl: "./method-header.component.html",
  styleUrls: ["./method-header.component.css"]
})
export class MethodHeaderComponent implements OnInit {
  @Input() private headers;

  constructor() {}

  ngOnInit() {
    console.log("THE HEADERS : ", this.headers);
  }
}
