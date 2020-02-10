import { ParamService } from "./param.service";
import { PathsService } from "./paths.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { PathComponent } from "./path/path.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { PathsComponent } from "./paths/paths.component";
import { MethodComponent } from "./method/method.component";
import { MethodControllerComponent } from "./method-controller/method-controller.component";
import { MethodDescriptionsComponent } from "./method-descriptions/method-descriptions.component";

import { RestangularModule } from "ngx-restangular";
import { MarkdownModule } from "ngx-markdown";
import { MethodHeaderComponent } from "./method-header/method-header.component";
import { MethodReturnStatusComponent } from "./method-return-status/method-return-status.component";
import { ParamValueComponent } from "./param-value/param-value.component";
import { ParamValueEditComponent } from "./param-value-edit/param-value-edit.component";
import { MethodReturnsComponent } from "./method-returns/method-returns.component";

// Function for setting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
  let prefix = window.location.href;
  console.log("PREFIX : " + prefix);

  RestangularProvider.setBaseUrl(prefix);
  RestangularProvider.setFullResponse(true);
  RestangularProvider.setPlainByDefault(true);

  RestangularProvider.addResponseInterceptor(
    (data, operation, what, url, response) => {
      console.log("INTERCEPT THE RESPONSE", response);
      console.log("THE RESPONSE DATA", data);

      return data;
    }
  );

  /*
  RestangularProvider.setErrorInterceptor(
    (response, subject, responseHandler) => {
      console.log("INTERCEPT THE ERROR ", response);

      //check if its Blob
      if (response.error instanceof Blob) {
        let reader = new FileReader();

        reader.addEventListener("loadend", () => {
          console.log(
            "GET THE INTERCEPTED ERROR RESULT AS TEXT",
            reader.result
          );
          response.error = JSON.parse(<string>reader.result);
          return response.error;
        });

        reader.readAsText(response.error);
        return true;
      } else return false;
      //return response.data;
    }
  );*/
}

@NgModule({
  declarations: [
    AppComponent,
    PathComponent,
    HeaderComponent,
    PathsComponent,
    MethodComponent,
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
