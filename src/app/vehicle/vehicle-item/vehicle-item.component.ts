import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.css']
})
export class VehicleItemComponent implements OnInit {

  @Input('vehicle') vehicle:Vehicle;
  @Output() vehicleCreated = new EventEmitter<Vehicle>();

  constructor() { }

  ngOnInit(): void {
  }

  onVehicleDetails(vehicle: Vehicle) {
    this.vehicleCreated.emit(vehicle);
  }
}
