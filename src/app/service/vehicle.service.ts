import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = "http://localhost:8080/api/v1/vehicle";

  constructor(private httpClient: HttpClient) { }

  getVehicleList():Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.baseUrl}`);
  }

  createVehicle(vehicle: Vehicle):Observable<Vehicle>{
    return this.httpClient.post<Vehicle>(`${this.baseUrl}`,vehicle);
  }

  getVehicleById(vehicleId:number):Observable<Vehicle>{
    return this.httpClient.get<Vehicle>(`${this.baseUrl}/${vehicleId}`);
  }

  updateVehicle(id:number,vehicle:Vehicle):Observable<Object>{
    console.log(`${this.baseUrl}/${id}`,vehicle);
    return this.httpClient.put(`${this.baseUrl}/${id}`,vehicle);
  }

  deleteVehicle(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
