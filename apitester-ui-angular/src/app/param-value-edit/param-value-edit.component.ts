import { Component, OnInit, Input, Renderer2, ElementRef } from "@angular/core";

@Component({
  selector: "app-param-value-edit",
  templateUrl: "./param-value-edit.component.html",
  styleUrls: ["./param-value-edit.component.css"]
})
export class ParamValueEditComponent implements OnInit {
  @Input() param;
  private $textarea;
  private fileName;

  constructor(private elmt: Renderer2, private elmt2: ElementRef) {}

  ngOnInit() {
    this.param.value = this.param.defaultValue;

    if (this.param.collection && this.param.paramType === "REQUEST") {
      this.param.collectionValues = [];
      this.param.newValue = "";
    }

    setTimeout(() => {
      this.$textarea = this.elmt2.nativeElement.querySelector("textarea");

      if (this.$textarea) {
        if (this.param.paramType !== "RETURN") {
          let value = this.param.object;

          if (this.param.collection) {
            value = [value];
          }

          this.updateBody(JSON.stringify(value));
        }
      }

      const $files = this.elmt2.nativeElement.querySelector("input[type=file]");

      if ($files) {
        $files.addEventListener("change", event => {
          const files = event.target.files;

          if (files && files.length) {
            this.fileName = files[0].name;
          }
        });
      }
    }, 100);
  }

  /**
   * @name addValue
   * @description add newValue to collectionValues
   * @return {undefined}
   */
  addValue() {
    if (this.param.newValue) {
      this.param.collectionValues.push(this.param.newValue);
      this.param.newValue = "";
    }
  }

  /**
   * @name removeValue
   * @description remove a value from collectionValues by index
   * @param {integer} index - index of the value in the collectionValues
   * @return {undefined}
   */
  removeValue(index) {
    this.param.collectionValues.splice(index, 1);
  }

  /**
   * @name updateBody
   * @description udpate value for request body
   * @param {string} [value=param.value] - The stringified body
   * @return {undefined}
   */
  updateBody(value) {
    this.elmt.removeClass(this.$textarea, "border-red");

    if (!value) {
      value = this.param.value;
    }

    try {
      this.param.value = JSON.stringify(
        JSON.parse(value.replace(/(\r\n|\n|\r)/gm, "")),
        null,
        2
      );
    } catch (error) {
      console.log(error);
      this.elmt.addClass(this.$textarea, "border-red");
    }
  }
}
