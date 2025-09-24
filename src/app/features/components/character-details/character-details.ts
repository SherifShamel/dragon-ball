import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Characters } from '../../../shared/services/characters/characters';
import { ISingleCharacter } from '../../../core/interfaces/isingle-character';
import { Icharacters, OriginPlanet, Transformation } from '../../../core/interfaces/icharacters';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  imports: [CarouselModule],
  templateUrl: './character-details.html',
  styleUrl: './character-details.css',
})
export class CharacterDetails implements OnInit {
  constructor(private _Characters: Characters, private _ActivatedRoute: ActivatedRoute) {}
  public character!: Icharacters;
  // characterTransformations!: Transformation[];
  // originPlanet!: OriginPlanet;
  char_id!: string | null;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 200,
    margin: 100,
    // center: true,
    // navText: ['Prev', 'Next'],
    responsive: {
      0: {
        items: 1,
      },
    },
    // nav: true,
  };

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.char_id = param.get('char_id');
      },
    });

    this._Characters.getSingleCharacter(Number(this.char_id)).subscribe({
      next: (res) => {
        this.character = res;
        // console.log(this.character);

        // this.characterTransformations = res.transformations;
        // this.originPlanet = res.originPlanet;
        // console.log(this.characterTransformations);
        // console.log(this.originPlanet);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
