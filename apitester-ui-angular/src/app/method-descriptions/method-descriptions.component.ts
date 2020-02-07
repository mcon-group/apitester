import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-method-descriptions",
  templateUrl: "./method-descriptions.component.html",
  styleUrls: ["./method-descriptions.component.css"]
})
export class MethodDescriptionsComponent implements OnInit {
  @Input() descriptions;

  constructor() {}

  ngOnInit() {
    console.log("THE DESCRIPTIONS : ", this.descriptions);
  }
}
