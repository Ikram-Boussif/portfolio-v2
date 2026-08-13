import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  imports: [NgFor, ScrollAnimationDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  lang = inject(LanguageService);

  texts = {
    title: { en: 'Technical', fr: 'Compétences' },
    titleGradient: { en: 'Skills', fr: 'Techniques' },
    subtitle: { en: 'Technologies I work with on a daily basis', fr: 'Technologies que j\'utilise au quotidien' }
  };

  skillGroups = [
    {
      category: 'Languages',
      icon: '{ }',
      color: 'purple',
      skills: ['TypeScript', 'JavaScript', 'Java', 'HTML5', 'CSS3 / SCSS']
    },
    {
      category: 'Frameworks & Libraries',
      icon: '⚡',
      color: 'teal',
      skills: ['Angular 19', 'Spring Boot', 'RxJS', 'NgRx', 'Angular Material', 'PrimeNG', 'TailwindCSS', 'Chart.js', 'Leaflet']
    },
    {
      category: 'Testing & Quality',
      icon: '✓',
      color: 'blue',
      skills: ['Jasmine', 'Karma', 'TDD', 'SonarQube', 'SonarLint']
    },
    {
      category: 'DevOps & Tools',
      icon: '⚙',
      color: 'orange',
      skills: ['Git', 'GitHub', 'GitLab', 'Docker', 'Jenkins', 'Figma', 'REST APIs']
    },
    {
      category: 'Databases',
      icon: '▦',
      color: 'pink',
      skills: ['MySQL', 'MongoDB']
    }
  ];

  // mainSkills = [
  //   { name: 'Angular', level: 90 },
  //   { name: 'TypeScript', level: 85 },
  //   { name: 'RxJS', level: 80 },
  //   { name: 'NgRx', level: 75 },
  //   { name: 'SCSS', level: 85 },
  // ];
}
