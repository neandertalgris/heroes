import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {Hero} from '../../models/hero';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});

  /**
   * Constructor
   * @param http
   */
  constructor(private http: Http) {
  }

  /**
   * Get Heroes
   * @returns {Promise<any|TResult2|Hero[]>}
   */
  public getHeroes(): Promise<Hero[]> {

    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  /**
   * Get hero by id
   * @param id
   * @returns {Promise<any|TResult2|Hero>}
   */
  public getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  /**
   * Update Hero
   * @param hero
   * @returns {Promise<any|TResult2|Hero>}
   */
  public update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  /**
   * Create new hero
   * @param name
   * @returns {Promise<any|TResult2|Hero>}
   */
  public create(name: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  /**
   * Delete Hero
   * @param id
   * @returns {Promise<any|TResult2|TResult1>}
   */
  public delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  /**
   * Get heroes with 2 seconds await
   * @returns {Promise<T>}
   */
  public getHeroesSlowly(): Promise<Hero[]> {
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
