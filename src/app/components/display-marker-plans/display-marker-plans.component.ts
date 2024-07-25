import { Component } from '@angular/core';
import {MarkerPlanResults} from "../../interfaces/marker-plan-results";
import {SizeWiseQuantitiesService} from "../../services/size-wise-quantities.service";

@Component({
  selector: 'app-display-marker-plans',
  templateUrl: './display-marker-plans.component.html',
  styleUrl: './display-marker-plans.component.scss'
})
export class DisplayMarkerPlansComponent {

  constructor(private sizeWiseQuantitiesService: SizeWiseQuantitiesService) {}

  sizes: string[] = this.sizeWiseQuantitiesService.sizes;
  quantities: number[] = this.sizeWiseQuantitiesService.quantities;
  markerPlanResults: { mainSolution: MarkerPlanResults | null, balanceMarkerPlans: MarkerPlanResults[] } = {
    mainSolution: null,
    balanceMarkerPlans: []
  };
  combinedPlans: any[] = [];

  combinePlans(): void{
    this.combinedPlans=[{
      type:'Main Marker',
      plyCount: this.markerPlanResults.mainSolution?.plyCount,
      cutRepeats: this.markerPlanResults.mainSolution?.cutRepeats,
      ratios: this.markerPlanResults.mainSolution?.ratios,
      balances: this.markerPlanResults.mainSolution?.balances
    },
      ...this.markerPlanResults.balanceMarkerPlans.map((plan , index) => ({
        type:`Balance Marker ${index + 1}`,
        plaCount: plan.plyCount,
        cutRepeats: plan.cutRepeats,
        ratios: plan.ratios,
        balances: plan.balances

      }))
    ]
  }

}
