import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


import {Hero} from '../../models/hero';
import {HeroService} from '../../services/hero/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  /**
   * Constructor
   * @param heroService
   * @param route
   * @param location
   */
  public constructor(private heroService: HeroService,
                     private route: ActivatedRoute,
                     private location: Location) {
  }

  /**
   * Back navigation
   */
  public goBack(): void {
    this.location.back();
  }

  /**
   * Save Hero
   */
  public save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  /**
   * ngOnInit re-write method
   */
  public ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

}
