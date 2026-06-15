import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    color: 'purple',
    skills: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3 / SCSS']
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚡',
    color: 'teal',
    skills: ['Angular 19', 'RxJS', 'NgRx', 'PrimeNG', 'TailwindCSS', 'Chart.js', 'Leaflet']
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
    skills: ['Git', 'GitHub', 'Docker', 'Jenkins', 'REST APIs']
  },
  {
    category: 'Databases',
    icon: '▦',
    color: 'pink',
    skills: ['MySQL', 'MongoDB']
  }
];

   mainSkills = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'RxJS', level: 80 },
    { name: 'NgRx', level: 75 },
    { name: 'SCSS', level: 85 },
  ];
}
