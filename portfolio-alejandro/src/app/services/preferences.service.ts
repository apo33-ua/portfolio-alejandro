import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';
export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  theme = signal<Theme>(
    (localStorage.getItem('theme') as Theme) || 'light'
  );

  language = signal<Language>(
    (localStorage.getItem('language') as Language) || 'es'
  );

  constructor() {
    this.applyTheme(this.theme());
  }

  toggleTheme(): void {
    const newTheme: Theme =
      this.theme() === 'light' ? 'dark' : 'light';

    this.theme.set(newTheme);
    localStorage.setItem('theme', newTheme);

    this.applyTheme(newTheme);
  }

  toggleLanguage(): void {
    const newLanguage: Language =
      this.language() === 'es' ? 'en' : 'es';

    this.language.set(newLanguage);
    localStorage.setItem('language', newLanguage);
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    );
  }
}