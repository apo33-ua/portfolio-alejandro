import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../portfolio-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.html'
})
export class Education {
  educationData = PORTFOLIO_DATA.education;
}