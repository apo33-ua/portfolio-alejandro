import { Component, signal } from '@angular/core';

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
  imports: [
    HeroComponent,
    Projects,
    Experience,
    Skills,
    Education,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  mobileMenuOpen = signal(false);

  constructor(
    public preferences: PreferencesService
  ) {}

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}