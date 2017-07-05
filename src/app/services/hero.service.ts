import {Injectable} from '@angular/core';

import {Hero} from "../models/hero";
import {HEROES} from "../mock-heroes";

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
   * Get heroes with 2 seconds await
   * @returns {Promise<T>}
   */
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
