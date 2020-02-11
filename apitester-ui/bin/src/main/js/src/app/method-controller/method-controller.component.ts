import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-method-controller",
  templateUrl: "./method-controller.component.html",
  styleUrls: ["./method-controller.component.css"]
})
export class MethodControllerComponent implements OnInit {
  @Input() controller: any;

  constructor() {}

  ngOnInit() {}
}
