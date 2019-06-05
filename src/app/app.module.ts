import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector,enableProdMode } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './helpers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterRoutingModule,routingComponets } from './router/router-routing.module';
 import { routing } from './app.routes123';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import { SettingsService } from './services/settings.service';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule,FirestoreSettingsToken } from "@angular/fire/firestore";

import { environment } from '../environments/environment';
import { AlertComponent } from './directives';
import { AuthGuard } from './guards';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { AlertService } from './services/alert.service';
import { httpService } from './services/http.service';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    routingComponets,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

  ],
  providers: [SettingsService,httpService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // provider used to create fake backend
    fakeBackendProvider


  ],
  bootstrap: [AppComponent]
})
export class AppModule {



 }




