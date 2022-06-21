import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-vehicle-update',
  templateUrl: './vehicle-update.component.html',
  styleUrls: ['./vehicle-update.component.css']
})
export class VehicleUpdateComponent implements OnInit {

  id:number;
  vehicle:Vehicle;
  tittle: String = "Editar características del vehículo";

  constructor(private route: ActivatedRoute, private router:Router, private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vehicle = new Vehicle();
    this.vehicleService.getVehicleById(this.id).subscribe(data => {
      this.vehicle = data;
      console.log(this.vehicle);
    })
  }

  toVehicleList(){
    this.router.navigate(['/vehicle-list']);
  }

  onSubmit(vehicle: Vehicle){
    console.log(this.id,vehicle);
    this.vehicleService.updateVehicle(this.id,vehicle).subscribe(dato => {
      this.toVehicleList();
    },error => console.log(error));
  }

  onCancel(){
    this.toVehicleList();
  }

}
