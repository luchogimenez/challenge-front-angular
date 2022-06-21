import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit(): void {
  }

  createVehicle() {
    console.log(this.vehicle);
      this.vehicleService.createVehicle(this.vehicle).subscribe(data => {
        console.log(data);
        this.redirectToVehicleList();
    },error=>console.log(error));
  }

  onSubmit() {
    console.log(this.vehicle);
    this.createVehicle();
  }
  
  redirectToVehicleList(){
    this.router.navigate(['/vehicle-list']);
  }

  onCancel(){
    this.redirectToVehicleList();
  }

}
