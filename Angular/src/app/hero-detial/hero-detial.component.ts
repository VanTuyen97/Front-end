import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detial',
  templateUrl: './hero-detial.component.html',
  styleUrls: ['./hero-detial.component.css']
})
export class HeroDetialComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private router: ActivatedRoute /**hold information of request */,
    private heroService: HeroService,
    private location: Location /**interacting with the browser*/
  ) {}

  getHero(): void {
    const id = +this.router.snapshot /**get static information from request */
    .paramMap /** dictionary of route parameter value extracted from the url */
      .get('id');

    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  ngOnInit() {
    this.getHero();
  }

  goBack(): void {
    this.location.back(); /**refesh browser and start */
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
