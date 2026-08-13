import { Injectable, signal } from '@angular/core';

export interface Theme {
  name: string;
  label: string;
  accent1: string;
  accent2: string;
  bg: string;
  bgGradient: string;
  bgLight: string;
  navBg: string;
  navBgLight: string;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(true);

  themes: Theme[] = [
    {
      name: 'purple',
      label: 'Purple Night',
      accent1: '#7F77DD',
      accent2: '#5DCAA5',
      bg: 'linear-gradient(135deg, #1a0f2e 0%, #0D0D14 50%, #0d1f1a 100%)',
      bgGradient: 'linear-gradient(135deg, #1a0f2e 0%, #0D0D14 50%, #0d1f1a 100%)',
      bgLight: 'linear-gradient(135deg, #f0eeff 0%, #f8f8fc 50%, #eef8f4 100%)',
      navBg: 'rgba(39, 31, 62, 0.88)',
      navBgLight: 'rgba(248, 246, 255, 0.88)',
    },
    {
      name: 'ocean',
      label: 'Ocean Blue',
      accent1: '#1a6ef5',
      accent2: '#00d4ff',
      bg: 'linear-gradient(135deg, #0a1628 0%, #0D0D14 50%, #0a1a28 100%)',
      bgGradient: 'linear-gradient(135deg, #0a1628 0%, #0D0D14 50%, #0a1a28 100%)',
      bgLight: 'linear-gradient(135deg, #eef4ff 0%, #f8f8fc 50%, #eef8ff 100%)',
      navBg: 'rgba(20, 29, 55, 0.88)',
      navBgLight: 'rgba(246, 249, 255, 0.88)',
    },
    {
      name: 'rose',
      label: 'Rose Gold',
      accent1: '#e85d8a',
      accent2: '#f4a261',
      bg: 'linear-gradient(135deg, #1f0a12 0%, #0D0D14 50%, #1f120a 100%)',
      bgGradient: 'linear-gradient(135deg, #1f0a12 0%, #0D0D14 50%, #1f120a 100%)',
      bgLight: 'linear-gradient(135deg, #fff0f4 0%, #f8f8fc 50%, #fff8f0 100%)',
      navBg: 'rgba(56, 28, 38, 0.88)',
      navBgLight: 'rgba(255, 248, 250, 0.88)',
    },
    {
      name: 'forest',
      label: 'Forest',
      accent1: '#2d6a4f',
      accent2: '#52b788',
      bg: 'linear-gradient(135deg, #0a1f12 0%, #0D0D14 50%, #0a1f0a 100%)',
      bgGradient: 'linear-gradient(135deg, #0a1f12 0%, #0D0D14 50%, #0a1f0a 100%)',
      bgLight: 'linear-gradient(135deg, #eef8f2 0%, #f8f8fc 50%, #eef8ee 100%)',
      navBg: 'rgba(21, 45, 31, 0.88)',
      navBgLight: 'rgba(246, 252, 248, 0.88)',
    }
  ];

  activeTheme = signal<Theme>(this.themes[0]);

  constructor() {
    this.applyTheme(this.themes[0]);
  }
  toggle() {
    this.isDark.update(v => !v);
    this.applyTheme(this.activeTheme());
  }

  setTheme(theme: Theme) {
    this.activeTheme.set(theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme: Theme) {
    const root = document.documentElement;
    root.style.setProperty('--accent-purple', theme.accent1);
    root.style.setProperty('--accent-teal', theme.accent2);
    root.style.setProperty('--nav-bg', this.isDark() ? theme.navBg : theme.navBgLight);
    document.body.style.background = this.isDark() ? theme.bgGradient : theme.bgLight;
  }
}
