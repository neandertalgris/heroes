import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Hero} from '../../models/hero';
import 'rxjs/add/operator/map';


@Injectable()
export class HeroSearchService {

  /**
   * Constructor
   * @param http
   */
  public constructor(private http: Http) {

  }

  /**
   * Search Heroes by term
   * @param term
   * @returns {Observable<R>}
   */
  public search(term: string): Observable<Hero[]> {
    return this.http.get(`api/heroes/?name=${term}`)
      .map(response => response.json().data as Hero[]);
  }
}
