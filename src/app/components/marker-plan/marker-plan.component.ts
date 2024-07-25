import { Component } from '@angular/core';
import {SizeWiseQuantitiesService} from "../../services/size-wise-quantities.service";

@Component({
  selector: 'app-marker-plan',
  templateUrl: './marker-plan.component.html',
  styleUrl: './marker-plan.component.scss'
})
export class MarkerPlanComponent {
  constructor(private sizeWiseQuantitiesService: SizeWiseQuantitiesService) {}

  sizes: string[] = this.sizeWiseQuantitiesService.sizes;
  quantities: number[] = this.sizeWiseQuantitiesService.quantities;
  newSize: string='';
  newQuantity: number | null = null;

  removeSize() {

  }

  addSizeQuantity() {

  }

  getMarkerPlans() {

  }
}
