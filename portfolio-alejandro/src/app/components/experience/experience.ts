import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  experienceData = PORTFOLIO_DATA.experience;
}