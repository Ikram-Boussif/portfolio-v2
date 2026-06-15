import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AssistantComponent } from './components/assistant/assistant.component';
import { FloatingBarComponent } from './components/floating-bar/floating-bar.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    AssistantComponent,
    FloatingBarComponent,
    ThemeSelectorComponent
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
