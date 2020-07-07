import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"createproduct",
    component:CreateproductComponent
  },
  {
    path:"productdetail",
    component:ProductdetailsComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
