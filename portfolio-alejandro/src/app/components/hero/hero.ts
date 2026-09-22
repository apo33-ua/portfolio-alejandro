import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../portfolio-data';
import { PreferencesService } from '../../services/preferences.service';
import { UI_TEXT } from '../../ui-text';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})

export class HeroComponent {

  heroData = PORTFOLIO_DATA.hero;
  

  ui = UI_TEXT;

  constructor(
    public preferences: PreferencesService
  ) {}

}
