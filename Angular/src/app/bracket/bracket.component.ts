import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.css']
})
export class BracketComponent implements OnInit {
  hero = new Hero(1, 'Tuyen');
  attributeClasses: {};
  attributeStyle: {};

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

  constructor() {
    this.setAttributeClasses();
    this.setAttributeStyle();
  }

  ngOnInit() {}
}
