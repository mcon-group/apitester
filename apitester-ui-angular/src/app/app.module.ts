import { ParamService } from "./param.service";
import { PathsService } from "./paths.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { HttpClientModule } from "@angular/common/http";
import { PathComponent } from "./path/path.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { PathsComponent } from "./paths/paths.component";
import { MethodComponent } from "./method/method.component";
import { MappingComponent } from "./mapping/mapping.component";
import { MethodControllerComponent } from "./method-controller/method-controller.component";
import { MethodDescriptionsComponent } from "./method-descriptions/method-descriptions.component";

import { RestangularModule, Restangular } from "ngx-restangular";
import { MarkdownModule } from "ngx-markdown";
import { MethodHeaderComponent } from "./method-header/method-header.component";
import { MethodReturnStatusComponent } from "./method-return-status/method-return-status.component";
import { ParamValueComponent } from "./param-value/param-value.component";
import { ParamValueEditComponent } from "./param-value-edit/param-value-edit.component";
import { MethodReturnsComponent } from "./method-returns/method-returns.component";

// Function for setting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
  var prefix = window.location.href;
  console.log("PREFIX : " + prefix);
  RestangularProvider.setBaseUrl(prefix);
  RestangularProvider.setFullResponse(true);
  RestangularProvider.setPlainByDefault(true);

  RestangularProvider.addResponseInterceptor(function(
    data,
    operation,
    what,
    url,
    response
  ) {
    console.log("INTERCEPT THE RESPONSE", response);

    //check if its Blob
    if (response && response.body instanceof Blob) {
      if (response.body.type.indexOf("image/") >= 0) {
        console.log(" ==== INTERCEPT THE IMAGE ==== ");
        //create a blob url to the image, that i can use anywhere
        var imgUrl = window.URL.createObjectURL(response.body);
        //put an imgUrl into the response

        response.body = imgUrl;
        response.isBinary = true;
        return response.body;
      } else {
        console.log(" ==== INTERCEPT SIMPLE RESPONSE ==== ");
        var reader = new FileReader();

        reader.addEventListener("loadend", function() {
          console.log("GET THE INTERCEPTED RESULT AS TEXT", reader.result);
          response.body = JSON.parse(<string>reader.result);
          console.log("PARSE THE INTERCEPTED RESULT AS JSON", response.body);
          return data;
        });

        reader.readAsText(response.body);
      }
    } else {
      return data;
    }
  });

  RestangularProvider.setErrorInterceptor(function(response) {
    console.log("INTERCEPT THE ERROR ", response.body);

    //check if its Blob
    if (response && response.body instanceof Blob) {
      console.log(" ==== INTERCEPT SIMPLE ERROR ==== ");
      var reader = new FileReader();

      reader.addEventListener("loadend", function() {
        console.log("GET THE INTERCEPTED ERROR RESULT AS TEXT", reader.result);
        response.body = JSON.parse(<string>reader.result);
        console.log(
          "PARSE THE INTERCEPTED ERROR RESULT AS JSON",
          response.body
        );
        return response.body;
      });

      reader.readAsText(response.body);
    } else {
      return response.body;
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    PathComponent,
    HeaderComponent,
    PathsComponent,
    MethodComponent,
    MappingComponent,
    MethodControllerComponent,
    MethodDescriptionsComponent,
    MethodHeaderComponent,
    MethodReturnStatusComponent,
    ParamValueComponent,
    ParamValueEditComponent,
    MethodReturnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot(),
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [PathsService, ParamService],
  bootstrap: [AppComponent]
})
export class AppModule {}
