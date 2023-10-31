import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociateListingComponent } from './component/associatelisting/associatelisting.component';

const routes: Routes = [
  {path:'',component:AssociateListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
