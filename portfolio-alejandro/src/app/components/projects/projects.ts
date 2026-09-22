import { Component } from '@angular/core';

import { PORTFOLIO_DATA } from '../../portfolio-data';
import { PreferencesService } from '../../services/preferences.service';
import { UI_TEXT } from '../../ui-text';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  projectsData = PORTFOLIO_DATA.projects;

  ui = UI_TEXT;

  constructor(
    public preferences: PreferencesService
  ) {}

}