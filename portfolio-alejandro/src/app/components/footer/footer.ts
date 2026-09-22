import { Component } from '@angular/core';

import { PORTFOLIO_DATA } from '../../portfolio-data';
import { PreferencesService } from '../../services/preferences.service';
import { UI_TEXT } from '../../ui-text';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html'
})
export class Footer {

  contactData = PORTFOLIO_DATA.contact;

  ui = UI_TEXT;

  constructor(
    public preferences: PreferencesService
  ) {}

}