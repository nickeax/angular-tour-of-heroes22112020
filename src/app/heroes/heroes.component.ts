import { Component, OnInit } from '@angular/core';
import { IHero } from '../ihero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  heroes = HEROES;
  selectedHero: IHero;

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
  }

}
