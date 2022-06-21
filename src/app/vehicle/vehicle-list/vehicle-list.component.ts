import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicleList: Vehicle[];

  constructor(private vehicleService: VehicleService, private route:Router) { }

  ngOnInit(): void {
    this.getVehicleList();
  }

  onVehicleDetail(id: number){
    this.route.navigate(['/vehicle-detail',id]);
  }

   getVehicleList(){
    this.vehicleService.getVehicleList().subscribe(data => {
      this.vehicleList = data;
      this.vehicleList.reverse();
    });
  }
}
