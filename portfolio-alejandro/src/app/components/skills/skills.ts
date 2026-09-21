import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html'
})
export class Skills {
  skillsData = PORTFOLIO_DATA.skills;
}