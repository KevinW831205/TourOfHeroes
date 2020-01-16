import { Injectable } from '@angular/core';
import { Hero } from '../Classes/Hero';
import { HEROES } from '../Classes/HeroList';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
