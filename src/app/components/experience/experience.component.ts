import { Component, inject, signal } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { LanguageService } from '../../services/language.service';

interface Experience {
  title: { en: string; fr: string };
  company: string;
  location: { en: string; fr: string };
  period: { en: string; fr: string };
  current: boolean;
  bullets: { en: string[]; fr: string[] };
  tags: string[];
  color: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  imports: [NgFor, NgIf, NgClass, ScrollAnimationDirective]
})
export class ExperienceComponent {

  expandedIndex = signal<number | null>(0);
  lang = inject(LanguageService);

  texts = {
    title: { en: 'Work', fr: 'Expériences' },
    titleGradient: { en: 'Experience', fr: 'Professionnelles' },
    subtitle: { en: 'My professional journey', fr: 'Mon parcours professionnel' },
    current: { en: '● Current', fr: '● En cours' },
    viewDetails: { en: 'View Details ↓', fr: 'Voir détails ↓' },
    showLess: { en: 'Show Less ↑', fr: 'Réduire ↑' }
  };

  experiences: Experience[] = [
    {
      title: {
        en: 'Full Stack Developer — Spring Boot / Angular',
        fr: 'Développeuse Full Stack — Spring Boot / Angular'
      },
      company: 'Algebra Systems',
      location: {
        en: 'Tunis, Tunisia',
        fr: 'Tunis, Tunisie'
      },
      period: {
        en: 'June 2023 – Present',
        fr: 'Juin 2023 – Présent'
      },
      current: true,
      color: 'purple',
      tags: ['Angular 19', 'Spring Boot', 'NgRx', 'Chart.js', 'CometChat', 'Leaflet'],
      bullets: {
        en: [
          'Led Angular v14→v19 migration, reducing load time by 79% (1.7 min → 22s) via lazy loading',
          'Developed Spring Boot microservices exposing REST APIs for financial and transactional flows',
          'Built interconnected Angular modules: billing, accounting, SLA, notifications & authentication',
          'Developed real-time communication module with CometChat — centralized notifications & read receipts',
          'Implemented OCR frontend workflow: file upload, data extraction and auto form population',
          'Built interactive maps with Leaflet & OpenStreetMap for geographic data visualization',
          'Improved code quality using SonarQube & SonarLint'
        ],
        fr: [
          'Conduit la migration Angular v14→v19, réduisant le temps de chargement de 79% (1,7 min → 22s) via le lazy loading',
          'Développé et maintenu des microservices Spring Boot exposant des APIs REST pour les flux financiers',
          'Construit des modules Angular interconnectés : facturation, comptabilité, SLA, notifications & authentification',
          'Développé un module de communication temps réel avec CometChat — notifications centralisées & accusés de lecture',
          'Implémenté le workflow OCR frontend : upload, extraction de données et préremplissage automatique des formulaires',
          'Développé des fonctionnalités cartographiques avec Leaflet & OpenStreetMap pour la visualisation géographique',
          'Amélioré la qualité du code via SonarQube & SonarLint'
        ]
      }
    },
    {
      title: {
        en: 'Frontend Angular Developer — Internship',
        fr: 'Stage de projet de fin d\'études — Développeuse Frontend Angular'
      },
      company: 'Mind And Go',
      location: {
        en: 'Perpignan, France',
        fr: 'Perpignan, France'
      },
      period: {
        en: 'March – October 2022',
        fr: 'Mars – Octobre 2022'
      },
      current: false,
      color: 'teal',
      tags: ['Angular', 'Microservices', 'Jenkins', 'Adobe XD'],
      bullets: {
        en: [
          'Built the entire Angular frontend of Datacup from scratch in a microservices architecture',
          'Designed modular structure with lazy loading, guards and reusable components for maintainability and scalability',
          'Implemented Adobe XD mockups into intuitive Angular interfaces in collaboration with the UI/UX designer',
          'Resolved integration and deployment issues via Jenkins and implemented offline mode support'
        ],
        fr: [
          'Développé from scratch l\'intégralité du front-end Angular du produit Datacup dans une architecture microservices',
          'Conçu une architecture modulaire basée sur lazy loading, guards et composants réutilisables pour assurer maintenabilité et scalabilité',
          'Implémenté les maquettes Adobe XD en interfaces Angular intuitives et ergonomiques en collaboration avec le designer UI/UX',
          'Contribué à la stabilité de l\'application en résolvant des problèmes d\'intégration, de déploiement via Jenkins et de gestion du mode hors ligne'
        ]
      }
    },
    {
      title: {
        en: 'Full Stack Developer — Internship',
        fr: 'Stage Ingénieur — Développeuse Full Stack'
      },
      company: 'Pixemantic',
      location: {
        en: 'Tunis, Tunisia',
        fr: 'Tunis, Tunisie'
      },
      period: {
        en: 'Jul 2021 – Sep 2021',
        fr: 'Juillet – Septembre 2021'
      },
      current: false,
      color: 'blue',
      tags: ['Angular', 'Spring Boot', 'Bootstrap'],
      bullets: {
        en: [
          'Developed a full-stack e-commerce application for biotherapeutic products — Spring Boot backend, Angular and Bootstrap frontend'
        ],
        fr: [
          'Développé une application full stack de conseil et vente de produits biothérapeutiques — Spring Boot (backend), Angular et Bootstrap (frontend)'
        ]
      }
    },
    // {
    //   title: 'Mobile Developer — Internship',
    //   company: 'Arab Tunisian Bank',
    //   location: 'Tunis, Tunisia',
    //   period: 'Feb 2019 – May 2019',
    //   current: false,
    //   color: 'orange',
    //   tags: ['Android Studio', 'Java'],
    //   bullets: [
    //     'Built an Android banking app with authentication, account & card management',
    //     'Implemented wire transfers and credit simulation features'
    //   ]
    // }
  ];

  toggle(index: number) {
    if (this.expandedIndex() === index) {
      this.expandedIndex.set(null);
    } else {
      this.expandedIndex.set(index);
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedIndex() === index;
  }
}
