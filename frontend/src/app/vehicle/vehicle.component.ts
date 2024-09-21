import { Component, OnInit, Input } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    MatFormField,
    MatLabel,
    MatInput,
  ],
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers: []
})
export class VehicleComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {


  }
}
