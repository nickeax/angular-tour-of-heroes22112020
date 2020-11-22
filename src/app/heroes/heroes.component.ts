import { Component, OnInit } from '@angular/core';
import { IHero } from '../ihero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) {

  }

  heroes: IHero[];
  selectedHero: IHero;

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(x => this.heroes = x);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
