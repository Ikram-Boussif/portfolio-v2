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
          'Participated in the transition from a monolithic to a microservices architecture, developing interconnected Angular modules across multiple business services (billing, accounting, financial transactions, SLA, notifications and authentication)',
          'Led the Angular migration from version 14 to 19 of a financial platform, managing breaking changes, PrimeNG updates and technical documentation, strengthening application performance and stability',
          'Reduced loading time by 79% (from 1.7 min to 22s) by implementing lazy loading of Angular modules',
          'Developed a real-time communication module based on CometChat within a microservices architecture, integrating centralized notifications, read receipts and unread message management around financial records',
          'Enhanced dashboards (Chart.js) with pie charts, histograms and customizable user-profile views, improving financial operations lifecycle tracking and data visualization',
          'Improved code quality and maintainability using SonarQube and SonarLint, fixing quality, security and technical debt issues',
          'Developed and maintained Spring Boot microservices exposing REST APIs for complex financial and transactional flows',
          'Collaborated with QA and DevOps teams to ensure software quality, delivery stability and deployment reliability'
        ],
        fr: [
          'Participé à la transition d\'une architecture monolithique vers une architecture microservices, en développant des modules Angular interconnectés avec plusieurs services métier (facturation, comptabilité, transactions financières, SLA, notifications et authentification)',
          'Assuré la migration Angular de la version 14 à 19 d\'une plateforme financière, en gérant les breaking changes, la mise à jour de PrimeNG et la documentation technique, renforçant les performances et la stabilité de l\'application',
          'Réduit le temps de chargement de 79% (de 1,7 min à 22 s) en implémentant le lazy loading des modules Angular',
          'Développé un module de communication en temps réel basé sur CometChat dans une architecture microservices, intégrant un système centralisé de notifications, accusés de lecture et gestion des messages non lus autour des dossiers financiers',
          'Enrichi les dashboards (Chart.js) avec pie charts, histogrammes et vues personnalisables par profil utilisateur, améliorant le suivi du cycle de vie des opérations financières et la visualisation des données',
          'Optimisé la qualité et la maintenabilité du code via SonarQube et SonarLint, en corrigeant les problèmes de qualité, de sécurité et de dette technique',
          'Développé et maintenu des microservices Spring Boot exposant des API REST pour la gestion de flux financiers et transactionnels complexes',
          'Travaillé en collaboration avec les équipes QA et DevOps pour garantir la qualité logicielle, la stabilité des livraisons et la fiabilité des déploiements'
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
