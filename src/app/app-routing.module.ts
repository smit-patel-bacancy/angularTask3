import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/loggedIn.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'/auth',pathMatch:'full',
  },
  {
    path:'auth',
    canActivate:[LoggedInGuard],
    loadChildren:()=>
      import(
        './auth/auth.module'
      ).then((m)=>m.AuthModule),
  },
  {
    path:'cart',
    canActivate:[authGuard],
    loadChildren:()=>
      import(
        './main/cart/cart.module'
      ).then((m)=>m.CartModule),
  },
  {
    path:'products',
    canActivate:[authGuard],
    loadChildren:()=>
      import(
        './main/product/product.module'
      ).then((m)=>m.ProductModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
