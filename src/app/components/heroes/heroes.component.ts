import {Component, OnInit} from '@angular/core';

import {Hero} from '../../models/hero'
import {HeroService} from '../../services/hero/hero.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router,
              private heroService: HeroService) {
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

  /**
   * Go to detail Hero
   */
  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
