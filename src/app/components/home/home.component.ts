import { Component, effect, inject } from '@angular/core';
import { ContactComponent } from '../../contact/contact.component';
import { ExperienceComponent } from '../experience/experience.component';
import { HeroComponent } from '../hero/hero.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { LanguageService } from '../../services/language.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  language = inject(LanguageService);
  titleService  = inject(Title);
  constructor() {
    // Change title based on active language
    effect(() => {
      this.titleService.setTitle(
        this.language.lang() === 'en'
          ? 'Ikram BOUSSIF | Full Stack Developer'
          : 'Ikram BOUSSIF | Développeuse Full Stack'
      );
    });
  }

}
