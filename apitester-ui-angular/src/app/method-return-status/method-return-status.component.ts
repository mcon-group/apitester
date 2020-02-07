import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-method-return-status",
  templateUrl: "./method-return-status.component.html",
  styleUrls: ["./method-return-status.component.css"]
})
export class MethodReturnStatusComponent implements OnInit {
  @Input() private status;

  constructor() {}

  ngOnInit() {
    console.log("THE RETURN STATUS : ", this.status);
  }
}
