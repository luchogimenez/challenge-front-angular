import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleCreateComponent } from './vehicle/vehicle-create/vehicle-create.component';
import { VehicleDetailComponent } from './vehicle/vehicle-detail/vehicle-detail.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleUpdateComponent } from './vehicle/vehicle-update/vehicle-update.component';

const routes: Routes = [
  {path:'vehicle-list',component:VehicleListComponent},
  {path:'vehicle-create',component:VehicleCreateComponent},
  {path:'',redirectTo:'vehicle-list',pathMatch:'full'},
  {path:'vehicle-update/:id',component:VehicleUpdateComponent},
  {path:'vehicle-detail/:id',component:VehicleDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
