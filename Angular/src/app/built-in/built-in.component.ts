import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-built-in',
  templateUrl: './built-in.component.html',
  styleUrls: ['./built-in.component.css']
})
export class BuiltInComponent implements OnInit {
  hero = new Hero(1, 'Tuyen');
  heroes: Hero[];
  attributeClasses: {};
  attributeStyle: {};
  status = false;
  cases = [];
  selected: number;

  // inject heroService to class
  constructor(
    private heroService: HeroService,
    public messageService: MessageService
  ) {}

  setCase() {
    this.cases = [
      'chosen zero',
      'chosen one',
      'chosen two',
      'chosen three',
      'chosen four'
  ];
  }

  selectedCase(index: number) {
    this.selected = index;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  setAttributeClasses() {
    this.attributeClasses = {
      saveable: true,
      modified: false,
      special: true,
      notice: true
    };
  }

  setAttributeStyle() {
    this.attributeStyle = {
      'font-style': true ? 'italic' : 'normal',
      'font-weight': false ? 'bold' : 'normal',
      'font-size': true ? '24px' : '12px'
    };
  }

  eventHandling() {
    this.messageService.add(
      `even - binding -hero: id - ${this.hero.id}, name - ${this.hero.name}`
    );
  }
  changeStatus() {
    this.messageService.add(
      `Built-in: change sattus from ${this.status} to ${!this.status}`
    );
    if (this.status === true) {
      this.status = false;
    } else {
      this.status = true;
    }
  }

  trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }

  ngOnInit() {
    this.getHeroes();
    this.setAttributeClasses();
    this.setAttributeStyle();
    this.setCase();
  }
}
