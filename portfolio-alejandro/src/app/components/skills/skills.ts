import { Component } from '@angular/core';

import { PORTFOLIO_DATA } from '../../portfolio-data';
import { PreferencesService } from '../../services/preferences.service';
import { UI_TEXT } from '../../ui-text';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  skillsData = PORTFOLIO_DATA.skills;

  ui = UI_TEXT;

  constructor(
    public preferences: PreferencesService
  ) {}

}