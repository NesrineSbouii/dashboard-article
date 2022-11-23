import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APOLLO_OPTIONS} from 'apollo-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginService } from './service/login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { createApollo, GraphQLModule } from './graphql.module';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    GraphQLModule,
    HttpClientModule

  ],
  providers: [LoginService, HttpClient,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
