import {Component, OnInit} from '@angular/core';

import {Hero} from "./models/hero";
import {HeroService} from "./services/hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  /**
   * Get Heroes from Service
   */
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  /**
   * OnInit
   */
  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * Select a Hero
   * @param hero
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}
