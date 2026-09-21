import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { Projects } from './components/projects/projects'; 
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Footer } from './components/footer/footer';
import { PreferencesService } from './services/preferences.service';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Añadimos Projects al array
  imports: [HeroComponent, Projects, Experience, Skills, Education, Footer], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { 
  constructor(
    public preferences: PreferencesService
  ) {}
}