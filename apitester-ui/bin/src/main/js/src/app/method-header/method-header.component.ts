import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-method-header",
  templateUrl: "./method-header.component.html",
  styleUrls: ["./method-header.component.css"]
})
export class MethodHeaderComponent implements OnInit {
  @Input() headers;

  constructor() {}

  ngOnInit() {}
}
