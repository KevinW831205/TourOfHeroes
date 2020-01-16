import { Component, OnInit } from '@angular/core';
import { Hero } from '../Classes/Hero';
import { HEROES } from "../Classes/HeroList";

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

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  }

}
