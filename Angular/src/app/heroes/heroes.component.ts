import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// tell angular where to get the major building block (component and view).
// associates a template with the component, either directly with inline code, or by reference.
@Component({
  // tell angular to create and insert an instance of this compomnent in template html.
  // in this case is <app-heroes></app-heroes>
  selector: 'app-heroes',

  // associate to this componment's template html.
  templateUrl: './heroes.component.html',

  // associate to this componment's css.
  styleUrls: ['./heroes.component.css'],

  // array of providers for services that the componment requires.
  providers: []
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // inject heroService to class
  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }
  ngOnInit() {
    this.getHeroes();
  }
}
