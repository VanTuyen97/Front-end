import { Component, OnInit, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  hero: Hero = new Hero(1, 'tuyen');

  evenClick() {
    this.messageService.add('even - binding - evenClick() called.');
  }

  eventHandling() {
    this.messageService.add(`even - binding -hero: id - ${this.hero.id}, name - ${this.hero.name}`);
  }

  constructor(public messageService: MessageService) { }

  ngOnInit() {}
}
