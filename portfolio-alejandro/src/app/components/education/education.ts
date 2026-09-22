import { Component } from '@angular/core';

import { PORTFOLIO_DATA } from '../../portfolio-data';
import { PreferencesService } from '../../services/preferences.service';
import { UI_TEXT } from '../../ui-text';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {

  educationData = PORTFOLIO_DATA.education;

  ui = UI_TEXT;

  constructor(
    public preferences: PreferencesService
  ) {}

}