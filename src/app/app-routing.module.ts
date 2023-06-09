import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import("./moduls/list/list.module").then(m=>m.ListModule)
  },
  {
    path:'details/:id',
    loadChildren: ()=>import("./moduls/details/details.module").then(m=>m.DetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
