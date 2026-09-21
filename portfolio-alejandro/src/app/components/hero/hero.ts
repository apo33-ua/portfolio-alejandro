import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../portfolio-data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})

export class HeroComponent {
  // Guardamos los datos del hero en una variable para usarla en el HTML
  heroData = PORTFOLIO_DATA.hero;
}
