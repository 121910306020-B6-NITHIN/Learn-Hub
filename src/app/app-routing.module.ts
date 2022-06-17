import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { PasswordComponent } from './password/password.component';
import { CourseComponent } from './course/course.component';
import { ModifyComponent } from './modify/modify.component';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { ContentComponent } from './content/content.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { CrudComponent } from './crud/crud.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'',redirectTo:'Login',pathMatch:'full'},
{path:'Login',component:LoginComponent},
{path:'Home',component:HomeComponent},
{path:'SignUp',component:SignupComponent},
{path:'Data',component:CrudComponent},
{path:'Read',component:ReadComponent},
{path:'update/:id',component:UpdateComponent},
{path:'content',component:ContentComponent},
{path:'Add',component:AddComponent},
{path:'Show',component:ShowComponent},
{path:'modify/:id',component:ModifyComponent},
{path:'Courses',component:CourseComponent},
{path:'Password',component:PasswordComponent},
{path:'updatepassword/:id',component:UpdatepasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
