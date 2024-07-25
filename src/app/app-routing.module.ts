import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarkerPlanComponent} from "./components/marker-plan/marker-plan.component";
import {DisplayMarkerPlansComponent} from "./components/display-marker-plans/display-marker-plans.component";

const routes: Routes = [
  {path: '', redirectTo: '/markerplan', pathMatch: 'full'},
  {path: 'markerplan', component: MarkerPlanComponent},
  {path: 'dispplaymarkerplan', component:DisplayMarkerPlansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
