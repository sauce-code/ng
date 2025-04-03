import { Component } from '@angular/core';
import {Hero} from '../hero';
import {FormsModule} from '@angular/forms';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-heroes',
  imports: [
    FormsModule,
    UpperCasePipe
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
}
