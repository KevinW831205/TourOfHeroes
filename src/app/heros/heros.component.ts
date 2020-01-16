import { Component, OnInit } from '@angular/core';
import { Hero } from '../Classes/Hero';
import { HEROES } from "../Classes/HeroList";
import { HeroService } from "../service/hero.service";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {

  // hero: Hero = {
  //   id: 0,
  //   name: "WindStorm"
  // };

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  }



}
