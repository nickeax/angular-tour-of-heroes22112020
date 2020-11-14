import { Component, OnInit, Input } from '@angular/core';
import { IHero } from '../ihero';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {

  constructor() { }
  @Input() hero: IHero;
  ngOnInit(): void {
  }

}
