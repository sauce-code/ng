import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgFor, NgIf, UpperCasePipe} from '@angular/common';
import {HEROES} from "../mock-heroes";
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  imports: [
    FormsModule,
    NgFor,
    UpperCasePipe,
    NgIf
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
