import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-param-value",
  templateUrl: "./param-value.component.html",
  styleUrls: ["./param-value.component.css"]
})
export class ParamValueComponent implements OnInit {
  @Input() private param;

  constructor() {}

  ngOnInit() {
    console.log("THE PARAMETRE VALUE : ", this.param);
  }
}
