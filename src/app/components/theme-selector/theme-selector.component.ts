import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-theme-selector',
  imports: [NgIf,NgFor],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss'
})
export class ThemeSelectorComponent {

  theme = inject(ThemeService);
  showPanel = signal(false);

  togglePanel() {
    this.showPanel.update(v => !v);
  }

  selectTheme(t: any) {
    this.theme.setTheme(t);
    this.showPanel.set(false);
  }

}
