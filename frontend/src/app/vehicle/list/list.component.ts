import { Component, Input } from '@angular/core';
import { IVehicle } from '../vehicle.model';
import { VehicleService } from '../vehicle.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() vehicleModel = [{}] as [IVehicle];

  constructor(private vehicleService: VehicleService) {
    this.vehicleService.getAllVehicles().subscribe(
      response => {
        // console.log(response);
        this.vehicleModel = response;
      }
    );

  }
}
