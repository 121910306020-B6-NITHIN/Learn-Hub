import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import {MatCardModule} from '@angular/material/card';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './crud/crud.component';
import {MatTableModule} from '@angular/material/table';
import { ReadComponent } from './read/read.component';
import {CdkTableModule} from '@angular/cdk/table';
import { UpdateComponent } from './update/update.component';
import { ContentComponent } from './content/content.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { ModifyComponent } from './modify/modify.component';
import { CourseComponent } from './course/course.component';
import { PasswordComponent } from './password/password.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CrudComponent,
    ReadComponent,
    UpdateComponent,
    ContentComponent,
    AddComponent,
    ShowComponent,
    ModifyComponent,
    CourseComponent,
    PasswordComponent,
    UpdatepasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
