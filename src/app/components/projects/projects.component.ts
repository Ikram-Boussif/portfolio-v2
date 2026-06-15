import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  year: string;
  tags: string[];
  color: string;
  github: string;
  live?: string;
}

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf,NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  activeFilter = signal('All');

  filters = ['All', 'Frontend', 'Full-Stack', 'Mobile'];

  projects: Project[] = [
    {
      id: 1,
      name: 'Fintech Dashboard',
      description: 'Real-time financial operations platform with Chart.js dashboards, OCR workflow, real-time messaging via CometChat & microservices integration.',
      category: 'Frontend',
      year: '2023 – Present',
      tags: ['Angular 19', 'NgRx', 'Chart.js', 'CometChat', 'Leaflet'],
      color: 'purple',
      github: 'https://github.com/Ikram-Boussif',
      live: ''
    },
    {
      id: 2,
      name: 'Datacup Platform',
      description: 'Full Angular SPA built from scratch in microservices architecture — lazy loading, route guards & reusable components for scalability.',
      category: 'Full-Stack',
      year: '2022',
      tags: ['Angular', 'Microservices', 'Jenkins', 'Adobe XD'],
      color: 'teal',
      github: 'https://github.com/Ikram-Boussif'
    },
    {
      id: 3,
      name: 'Biotherapy App',
      description: 'Full-stack e-commerce application for biotherapeutic products — Node.js REST API backend with Angular and Bootstrap frontend.',
      category: 'Full-Stack',
      year: '2021',
      tags: ['Angular', 'Node.js', 'Bootstrap', 'REST API'],
      color: 'blue',
      github: 'https://github.com/Ikram-Boussif'
    },
    {
      id: 4,
      name: 'Banking Mobile App',
      description: 'Android banking application with authentication, account management, card & cheque management, wire transfers and credit simulation.',
      category: 'Mobile',
      year: '2019',
      tags: ['Android Studio', 'Java'],
      color: 'orange',
      github: 'https://github.com/Ikram-Boussif'
    }
  ];

  filteredProjects = computed(() => {
    if (this.activeFilter() === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter());
  });

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }

}
