import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-method-returns",
  templateUrl: "./method-returns.component.html",
  styleUrls: ["./method-returns.component.css"]
})
export class MethodReturnsComponent implements OnInit {
  @Input() response;

  constructor() {}

  ngOnInit() {
    console.log("THE RETURNS : ", this.response);
  }
}
