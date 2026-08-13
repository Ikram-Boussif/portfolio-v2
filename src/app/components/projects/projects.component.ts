import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

interface Project {
  id: number;
  name: string;
  description: { en: string; fr: string };
  category: string;
  year: { en: string; fr: string };
  tags: string[];
  color: string;
  github: string;
  live?: string;
  private: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf, NgClass, ScrollAnimationDirective, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  activeFilter = signal('All');

  filters = ['All', 'Frontend', 'Full-Stack', 'Mobile'];
  showAll = signal(false);
  lang = inject(LanguageService);

  texts = {
    title: { en: 'Featured', fr: 'Mes' },
    titleGradient: { en: 'Projects', fr: 'Projets' },
    subtitle: { en: 'Things I\'ve built', fr: 'Ce que j\'ai construit' },
    viewMore: { en: 'View more projects ↓', fr: 'Voir plus de projets ↓' },
    showLess: { en: 'Show less ↑', fr: 'Réduire ↑' },
    viewDetails: { en: 'View Details ↗', fr: 'Voir détails ↗' },
    filters: {
      en: ['All', 'Frontend', 'Full-Stack', 'Mobile'],
      fr: ['Tous', 'Frontend', 'Full-Stack', 'Mobile']
    }
  };

  projects: Project[] = [
    {
      id: 1,
      name: 'Fintech Dashboard',
      description: {
        en: 'Financial operations platform built with Angular & Spring Boot microservices.',
        fr: 'Plateforme de gestion financière construite avec Angular et Spring Boot en architecture microservices.'
      },
      category: 'Full-Stack',
      year: { en: '2023 – Present', fr: '2023 – Présent' },
      tags: ['Angular 19', 'Spring Boot', 'NgRx', 'Chart.js', 'CometChat'],
      color: 'purple',
      github: '',
      live: '',
      private: true
    },
    {
      id: 2,
      name: 'KinderGarten',
      description: {
        en: 'A web platform dedicated to kindergarten management, enabling administrators, owners and parents to interact through dedicated dashboards.',
        fr: 'Une plateforme web dédiée à la gestion des jardins d\'enfants, permettant aux administrateurs, propriétaires et parents d\'interagir via des tableaux de bord dédiés.'
      },
      category: 'Full-Stack',
      year: { en: '2021', fr: '2021' },
      tags: ['Java', 'JavaScript', 'HTML', 'CSS', 'C#', 'Git'],
      color: 'teal',
      github: 'https://github.com/mohamed-kouti/Kindergarten_Backend',
      live: '',
      private: false
    },
    {
      id: 3,
      name: 'Herbin — Biotherapy App',
      description: {
        en: 'A web platform for selling therapeutic products online, with catalog browsing and admin product management.',
        fr: 'Une plateforme web de vente de produits thérapeutiques en ligne, avec navigation dans le catalogue et gestion des produits par les administrateurs.'
      },
      category: 'Full-Stack',
      year: { en: '2021', fr: '2021' },
      tags: ['Angular', 'Spring Boot', 'Bootstrap'],
      color: 'blue',
      github: 'https://github.com/Ikram-Boussif/ProjetHerbin',
      live: '',
      private: false
    },
    {
      id: 4,
      name: 'Météo App',
      description: {
        en: 'Weather application that automatically detects the user\'s location or lets them search a city, using the OpenWeatherMap API.',
        fr: 'Application météo qui détecte automatiquement la position de l\'utilisateur ou permet de rechercher une ville, via l\'API OpenWeatherMap.'
      },
      category: 'Frontend',
      year: { en: '2024', fr: '2024' },
      tags: ['JavaScript', 'HTML', 'CSS', 'API REST'],
      color: 'orange',
      github: 'https://github.com/Ikram-Boussif/meteo-project',
      live: '',
      private: false
    },
    {
      id: 5,
      name: 'Le Juste Prix',
      description: {
        en: 'Interactive JavaScript guessing game — find a random number between 0 and 1000 with feedback after each attempt.',
        fr: 'Jeu de devinettes interactif en JavaScript — trouvez un nombre aléatoire entre 0 et 1000 grâce à un retour après chaque tentative.'
      },
      category: 'Frontend',
      year: { en: '2025', fr: '2025' },
      tags: ['JavaScript', 'HTML', 'CSS', 'Git'],
      color: 'pink',
      github: 'https://github.com/Ikram-Boussif/price-guessing-game',
      live: '',
      private: false
    }
  ];

  filteredProjects = computed(() => {
    if (this.activeFilter() === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter());
  });

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
  visibleProjects = computed(() => {
    if (this.showAll()) return this.filteredProjects();
    return this.filteredProjects().slice(0, 4);
  });

}
