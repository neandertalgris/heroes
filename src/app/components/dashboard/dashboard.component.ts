import {Component, OnInit} from '@angular/core';

import {Hero} from '../../models/hero';
import {HeroService} from '../../services/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  /**
   * Constructor
   * @param heroService
   */
  public constructor(private heroService: HeroService) {
  }

  /**
   * ngOnInit re-write method
   */
  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
