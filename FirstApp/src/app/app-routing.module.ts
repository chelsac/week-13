import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewuserComponent } from './newuser/newuser.component';
import { PhoneComponent } from './phone/phone.component';
import { StudentComponent } from './student/student.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'users',component:UsersComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent,
children:[
  {path:'address',component:AddressComponent},
  {path:'phone',component:PhoneComponent}
]},
{path:'student',component:StudentComponent},
{path:'newuser',component:NewuserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
