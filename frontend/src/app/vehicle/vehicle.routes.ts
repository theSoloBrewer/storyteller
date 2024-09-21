import { Routes } from '@angular/router';
import { VehicleComponent } from './vehicle.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

export const VEHICLE_ROUTES: Routes = [{
  path: '',
  component: VehicleComponent,
  providers: [],
  children: [
    {
      path: '',
      component: ListComponent
    },
    {
      path: 'edit/:id',
      component: EditComponent
    }
  ]
}];
