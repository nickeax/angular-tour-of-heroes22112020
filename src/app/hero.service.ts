import { Injectable } from '@angular/core';
import { IHero } from './ihero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  getHeroes(): Observable<IHero[]> {
    return of(HEROES);
  }

  constructor() { }
}
