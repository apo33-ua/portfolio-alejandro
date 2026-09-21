import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects { 
  // Nos aseguramos de que la variable está aquí dentro
  projectsData = PORTFOLIO_DATA.projects;
}