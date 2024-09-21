import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IVehicle, Vehicle } from './vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  // CRUD operations

  // Create a new vehicle
  createVehicle(vehicleData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/vehicle', vehicleData);
  }

  // Get all vehicles
  getAllVehicles(): Observable<[IVehicle]> {
    return this.http.get<[IVehicle]>('http://localhost:3000/api/vehicle');
  }

  // Get a vehicle by ID
  getVehicleById(vehicleId: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/vehicle/${vehicleId}`);
  }

  // Update a vehicle
  updateVehicle(vehicleId: string, vehicleData: any): Observable<any> {
    return this.http.put<any>(`/api/vehicles/${vehicleId}`, vehicleData);
  }

  // Delete a vehicle
  deleteVehicle(vehicleId: string): Observable<any> {
    return this.http.delete<any>(`/api/vehicles/${vehicleId}`);
  }
}
