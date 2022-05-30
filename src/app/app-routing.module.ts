import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './components/forecast/forecast.component';
import { LocationComponent } from './components/location/location.component';

const routes: Routes = [{path: 'home', component: LocationComponent},
                            {path: '', component: ForecastComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
