import { Injectable } from '@angular/core';
import { Hero } from '../Classes/Hero';
import { HEROES } from '../Classes/HeroList';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
