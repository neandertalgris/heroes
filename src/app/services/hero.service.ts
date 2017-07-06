import {Injectable} from '@angular/core';

import {Hero} from '../models/hero';
import {HEROES} from '../mock-heroes';

@Injectable()
export class HeroService {

  /**
   * Get Heroes
   * @returns {Promise<Hero[]>}
   */
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  /**
   * Get hero by id
   * @param id
   * @returns {Promise<TResult2|TResult1>}
   */
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  /**
   * Get heroes with 2 seconds await
   * @returns {Promise<T>}
   */
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 1 second delay
      setTimeout(() => resolve(this.getHeroes()), 1000);
    });
  }
}
