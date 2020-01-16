import { Component, OnInit } from '@angular/core';
import { Hero } from '../Classes/Hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {

  hero: Hero = {
    id: 0,
    name: "WindStorm"
  };


  constructor() { }

  ngOnInit() {
  }

}
