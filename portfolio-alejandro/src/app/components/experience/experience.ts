import { Component } from '@angular/core';

import { PORTFOLIO_DATA } from '../../portfolio-data';
import { PreferencesService } from '../../services/preferences.service';
import { UI_TEXT } from '../../ui-text';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

  experienceData = PORTFOLIO_DATA.experience;

  ui = UI_TEXT;

  constructor(
    public preferences: PreferencesService
  ) {}

}