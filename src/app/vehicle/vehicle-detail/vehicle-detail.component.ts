import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  id:number;
  vehicle:Vehicle;

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vehicle = new Vehicle();
    this.vehicleService.getVehicleById(this.id).subscribe(data => {
      this.vehicle = data;
    })
  }

  toVehicleList(){
    this.router.navigate(['/vehicle-list']);
  }

  updateVehicle(vehicleId: number){
    this.router.navigate(['vehicle-update',vehicleId]);
  }

  deleteVehicle(vehicleId: number){
    this.vehicleService.deleteVehicle(vehicleId).subscribe(data=>{
      console.log(data);
      this.toVehicleList();
    });
    
  }
  onReturn(){
    this.toVehicleList();
  }

}
