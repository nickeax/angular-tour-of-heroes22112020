import { Component, OnInit } from '@angular/core';
import { IHero } from '../ihero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  hero: IHero = {
    id: 1,
    name: 'Windstorm'
  };

  ngOnInit(): void {
  }

}
