import { Component, inject, OnInit } from '@angular/core';
import { PlanetsService } from '../../../shared/services/planetsService/planets';
import { IPlanets } from '../../../core/interfaces/iplanets';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-planets',
  imports: [RouterLink],
  templateUrl: './planets.html',
  styleUrl: './planets.css',
})
export class Planets implements OnInit {
  constructor(private _PlanetsService: PlanetsService) {}
  // private readonly _PlanetsService = inject(PlanetsService);

  allPlanets!: IPlanets[];
  isDestroyed!: boolean;

  ngOnInit(): void {
    this._PlanetsService.getPlanets('').subscribe({
      next: (res) => {
        this.allPlanets = res.items;
        console.log(this.allPlanets);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  
}
