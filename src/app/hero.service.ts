import { Injectable } from '@angular/core';
import { IHero } from './ihero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  getHeroes(): Observable<IHero[]> {
    // TODO: Send the message _after_ fetching the heroes
    this.ms.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  constructor(private ms: MessageService) { }
}
