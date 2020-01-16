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
  // selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   console.log(hero);
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }


}
