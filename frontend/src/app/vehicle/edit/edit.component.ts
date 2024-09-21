import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { VehicleService } from '../vehicle.service';
import { IVehicle } from '../vehicle.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})


export class EditComponent implements OnInit {
  vehicleForm: FormGroup;
  routeSub?: Subscription;
  categories = {
    car: 1,
    bike: 2
  };
  constructor(private fb: FormBuilder, private vehicleService: VehicleService, private route: ActivatedRoute) {
    this.vehicleForm = this.fb.group({
      title: ['', Validators.required],
      category: [''],
      nickname: [''],
      designation: [''],
      creation: [null],
      destruction: [null],
      current_location: [null],
      manufacture: [null],
      owner: [null],
      armor: [''],
      weapons: ['']
    });
  }
  onSubmit() {
    const vehicleData: IVehicle = this.vehicleForm.value;
    // console.log('send service');

  }
  ngOnInit() {
    /* this.vehicleService.getVehicleById(this.vehicleForm.value)
      .subscribe({
        next: (data) => {
          console.log('Form submitted successfully');
        },
        error: (error: any) => {
          console.log(error);
        }
      }); */
    console.log('EditComp');
    this.routeSub = this.route.params.subscribe(
      res => {
        console.log(res); //log the entire params object
        console.log(res['id']); //log the value of id
      });
  }
  ngOnDestroy() {
    // this.routeSub.unsubscribe();
  }
}
