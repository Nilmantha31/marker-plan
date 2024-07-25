import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizeWiseQuantitiesService {

  constructor() { }

  sizes: string[] = ["TB", "NB", "UP1M", "UP3M", "3/6", "6/9", "9/12", "12/18", "18/24"];
  quantities: number[]= [346,437,697,1818,1818,1473,1128,869,863];

}
