import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {Hero} from '../../models/hero';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: Http) {
  }

  /**
   * Get Heroes
   * @returns {Promise<Hero[]>}
   */
  getHeroes(): Promise<Hero[]> {

    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
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

  /**
   * Handle error request
   * @param error
   * @returns {Promise<never>}
   */
  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
