import { Component, OnInit } from '@angular/core';
import { Characters } from '../../../shared/services/characters/characters';
import { Icharacters } from '../../../core/interfaces/icharacters';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
  constructor(private _Characters: Characters) {}
  
  characters!: Icharacters[];
  transformations!: string[];
  
  ngOnInit(): void {
    this._Characters.getCharacters('').subscribe({
      next: (res) => {
        this.characters = res.items;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getMore(){
    
  }
}
