import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FloatingBarComponent } from './components/floating-bar/floating-bar.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FloatingBarComponent,
    ThemeSelectorComponent,
    ScrollTopComponent
  ],
  templateUrl: './app.component.html',
  styles: [`
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
    }
  `]
})
export class AppComponent { }
