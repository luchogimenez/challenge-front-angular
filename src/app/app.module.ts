import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleItemComponent } from './vehicle/vehicle-item/vehicle-item.component';
import { VehicleDetailComponent } from './vehicle/vehicle-detail/vehicle-detail.component';
import { VehicleCreateComponent } from './vehicle/vehicle-create/vehicle-create.component';
import { VehicleUpdateComponent } from './vehicle/vehicle-update/vehicle-update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleItemComponent,
    VehicleDetailComponent,
    VehicleCreateComponent,
    VehicleUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
