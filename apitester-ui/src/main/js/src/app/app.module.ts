import { MainComponent } from "./main/main.component";
import { RouterModule, Routes } from "@angular/router";
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
import { APP_BASE_HREF } from "@angular/common";

// Function for setting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
  var index = window.location.href.lastIndexOf("apitester");

  var prefix = window.location.href.substr(0, index);
  console.log("prefix: " + prefix);

  RestangularProvider.setBaseUrl(prefix);
  RestangularProvider.setFullResponse(true);
  RestangularProvider.setPlainByDefault(true);

  RestangularProvider.addFullRequestInterceptor(
  	(element , operation , path , url , headers , params)=>{

	    let xsrfToken = "";

      document.cookie.split(";").map(
        value => {
          let c = value.split("=");
          if(c[0] == "XSRF-TOKEN") {
            xsrfToken = c[1];
          }
        }
      );
      return {headers : Object.assign({} , headers , {'X-XSRF-TOKEN': xsrfToken})};
    }
  );

  RestangularProvider.addResponseInterceptor(
    (data, operation, what, url, response) => {
      return data;
    }
  );
}

const getBaseUrl = () => {
  const paths = window.location.pathname.split("/");
  console.log("THE PATHS ", paths);

  let baseHref = "/";
  for (let i = 1; i < paths.length - 1; i++) {
    baseHref += paths[i];
    if (i < paths.length - 2) baseHref += "/";
  }

  var index = baseHref.lastIndexOf("apitester");

  if (index < 0) {
    baseHref += "/apitester";
  }

  console.log("THE BASE ", baseHref);
  return baseHref;
};

const appRoutes: Routes = [
  { path: "", component: MainComponent, pathMatch: "full" },
  {
    path: "**",
    redirectTo: ""
  }
];

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
    MethodReturnsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot(),
    RestangularModule.forRoot(RestangularConfigFactory),
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [
    PathsService,
    ParamService,
    { provide: APP_BASE_HREF, useValue: getBaseUrl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
