import { Component, OnInit } from '@angular/core';
import { IHero } from '../ihero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, public ms: MessageService) {

  }

  heroes: IHero[];
  selectedHero: IHero;

  onSelect(hero: IHero): void {
    this.ms.add(`[HeroesComponent] ${hero.name} selected.`)
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(x => this.heroes = x);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
