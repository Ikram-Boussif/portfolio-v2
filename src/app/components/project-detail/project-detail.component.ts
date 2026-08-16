import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface ProjectDetail {
  id: number;
  name: { en: string, fr: string };
  category: string;
  type: { en: string; fr: string };
  year: { en: string; fr: string };
  description: { en: string; fr: string };
  bullets: { en: string[]; fr: string[] };
  tags: string[];
  color: string;
  github: string;
  live?: string;
  private: boolean;
  hasDemo: boolean;
  screenshots: string[];
  videoUrl?: string;
}

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
  imports: [NgFor, NgIf, NgClass]
})
export class ProjectDetailComponent implements OnInit {

  route = inject(ActivatedRoute);
  activeTab = signal<'overview' | 'demo'>('overview');
  project = signal<ProjectDetail | null>(null);
  zoomedImage = signal<string | null>(null);
  router = inject(Router);
  lang = inject(LanguageService);
  sanitizer = inject(DomSanitizer);

  projects: ProjectDetail[] = [
    {
      id: 1,
      name: {
        en: 'Mortgage Loan Management',
        fr: 'Gestion des Prêts Hypothécaires'
      },
      category: 'Full-Stack',
      type: { en: 'Professional', fr: 'Professionnel' },
      year: { en: '2023 – Present', fr: '2023 – Présent' },
      color: 'purple',
      private: true,
      hasDemo: true,
      screenshots: [
        'projects/fintech/dashbord.png',
        'projects/fintech/asp.png',
        'projects/fintech/prefile.png'
      ],
      tags: ['Angular 19', 'Spring Boot', 'NgRx', 'Chart.js', 'CometChat', 'Leaflet'],
      github: '',
      description: {
        en: 'A financial operations platform enabling secure management of billing, transactions and credit workflows, built with Angular & Spring Boot microservices, featuring real-time messaging and notifications.',
        fr: "Une plateforme de gestion financière permettant la gestion sécurisée de la facturation, des transactions et des processus de crédit, construite avec Angular et Spring Boot en architecture microservices, incluant messagerie et notifications en temps réel."
      },
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
      },
    },
    {
      id: 2,
      name: { en: 'Portfolio', fr: 'Portfolio' },
      category: 'Frontend',
      type: { en: 'Personal', fr: 'Personnel' },
      year: { en: '2026', fr: '2026' },
      color: 'purple',
      private: false,
      hasDemo: false,
      videoUrl: '',
      screenshots: [],
      tags: ['Angular 19', 'TypeScript', 'SCSS', 'EmailJS', 'Vercel'],
      github: 'https://github.com/Ikram-Boussif/ikram-boussif-portfolio',
      live: 'https://ikram-boussif-portfolio.vercel.app/',
      description: {
        en: 'Personal portfolio built with Angular 19 featuring 4 color themes, EN/FR language switcher, scroll animations, project detail pages with lazy-loaded routing and EmailJS contact form.',
        fr: 'Portfolio personnel développé avec Angular 19 avec 4 thèmes de couleurs, switcher de langue EN/FR, animations au scroll, pages de détail avec routing lazy-loaded et formulaire de contact EmailJS.'
      },
      bullets: {
        en: [
          'Built with Angular 19 standalone components and signals for reactive state management',
          'Implemented 4 color themes with CSS variables that change dynamically at runtime',
          'EN/FR language switcher with full content translation using a custom LanguageService',
          'Lazy-loaded routing for project detail pages — HomeComponent and ProjectDetailComponent',
          'Scroll animations using IntersectionObserver API via a custom Angular directive',
          'Contact form powered by EmailJS — no backend required',
          'Deployed on Vercel with automatic deployment on every git push'
        ],
        fr: [
          'Développé avec Angular 19 standalone components et signals pour la gestion réactive de l\'état',
          'Implémentation de 4 thèmes de couleurs avec variables CSS modifiables dynamiquement',
          'Switcher de langue EN/FR avec traduction complète du contenu via un LanguageService personnalisé',
          'Routing lazy-loaded pour les pages de détail — HomeComponent et ProjectDetailComponent',
          'Animations au scroll via l\'API IntersectionObserver avec une directive Angular personnalisée',
          'Formulaire de contact via EmailJS — sans backend',
          'Déployé sur Vercel avec déploiement automatique à chaque git push'
        ]
      }
    },
    {
      id: 3,
      name: { en: 'KinderGarten', fr: 'Jardin d\'enfants' },
      category: 'Full-Stack',
      type: { en: 'Academic', fr: 'Académique' },
      year: { en: '2021', fr: '2021' },
      color: 'teal',
      private: false,
      hasDemo: true,
      screenshots: [
      ],
      videoUrl: 'https://www.youtube.com/embed/7H4U5ocYoHs',
      tags: ['Java', 'JavaScript', 'HTML', 'CSS', 'C#', 'Git'],
      github: 'https://github.com/mohamed-kouti/Kindergarten_Backend',
      description: {
        en: 'A web platform dedicated to kindergarten management. It enables administrators to manage users and complaints, owners to organize events, assign children to available classes and track parent relationships, and parents to register their children, manage their profiles and communicate with staff.',
        fr: 'Une plateforme web dédiée à la gestion des jardins d\'enfants. Elle permet aux administrateurs de gérer les utilisateurs et les réclamations, aux propriétaires d\'organiser des événements, d\'affecter les enfants aux classes disponibles et de suivre la relation avec les parents, et aux parents d\'inscrire leurs enfants, de gérer leurs profils et de communiquer avec le personnel.'
      },
      bullets: {
        en: [
          'Built multi-role platform — Admin, Owner and Parent with different dashboards',
          'Admin panel for user management, complaints handling and reporting',
          'Owner dashboard for event organization, class management and child assignment',
          'Parent portal for child registration, profile management and staff communication',
          'Team project — collaborated with 3 developers using Git workflow'
        ],
        fr: [
          'Développé une plateforme multi-rôles — Admin, Propriétaire et Parent avec des tableaux de bord distincts',
          'Panneau admin pour la gestion des utilisateurs, le traitement des réclamations et le reporting',
          'Tableau de bord propriétaire pour l\'organisation d\'événements, la gestion des classes et l\'affectation des enfants',
          'Portail parent pour l\'inscription des enfants, la gestion de profil et la communication avec le personnel',
          'Projet en équipe — collaboration avec 3 développeurs via un workflow Git'
        ]
      },
    },
    {
      id: 4,
      name: { en: 'Herbin', fr: 'Herbin' },
      category: 'Full-Stack',
      type: { en: 'Internship', fr: 'Stage' },
      year: { en: '2021', fr: '2021' },
      color: 'blue',
      private: false,
      hasDemo: true,
      screenshots: [
        'projects/herbin/accueil-herbin.png',
        'projects/herbin/loginPage.png',
        'projects/herbin/products-list.png'
      ],
      tags: ['Angular', 'Spring Boot', 'Bootstrap'],
      github: 'https://github.com/Ikram-Boussif/ProjetHerbin',
      description: {
        en: 'A web platform for selling therapeutic products online. It allows visitors to register and browse the catalog, customers to place orders after registration, and administrators to manage both users and products (add, update, delete, and check availability).',
        fr: 'Une plateforme web de vente de produits thérapeutiques en ligne. Elle permet aux visiteurs de s\'inscrire et de parcourir le catalogue, aux clients de passer des commandes après inscription, et aux administrateurs de gérer à la fois les utilisateurs et les produits (ajout, modification, suppression et vérification de la disponibilité).'
      },
      bullets: {
        en: [
          'Built multi-role platform — Visitor, Customer and Administrator with tailored features',
          'Visitor access to product catalog browsing and account registration',
          'Customer flow for browsing and ordering products after registration',
          'Admin panel for managing users and products — add, update, delete and availability tracking',
          'Developed with Spring Boot REST API backend and Angular frontend using Bootstrap for a responsive UI'
        ],
        fr: [
          'Développé une plateforme multi-rôles — Visiteur, Client et Administrateur avec des fonctionnalités dédiées',
          'Accès visiteur pour parcourir le catalogue de produits et créer un compte',
          'Parcours client pour parcourir le catalogue et passer des commandes après inscription',
          'Panneau admin pour la gestion des utilisateurs et des produits — ajout, modification, suppression et suivi de disponibilité',
          'Développé avec un backend Spring Boot exposant une API REST et un frontend Angular utilisant Bootstrap pour une interface responsive'
        ]
      }
    },
    {
      id: 5,
      name: { en: 'Weather', fr: 'Météo' },
      category: 'Frontend',
      type: { en: 'Personal', fr: 'Personnel' },
      year: { en: '2024', fr: '2024' },
      color: 'orange',
      private: false,
      hasDemo: true,
      screenshots: ['projects/meteo/meteo-project-screenshot.png'],
      tags: ['JavaScript', 'HTML', 'CSS', 'API REST'],
      github: 'https://github.com/Ikram-Boussif/meteo-project',
      description: {
        en: 'A simple weather application that displays the current weather for the user\'s automatically detected location, or for a city manually chosen by the user.',
        fr: 'Une application météo simple affichant la météo actuelle pour la position détectée automatiquement, ou pour une ville choisie manuellement par l\'utilisateur.'
      },
      bullets: {
        en: [
          'Automatic location detection using GPS coordinates to fetch real-time weather data',
          'Manual city search — defaults to Paris if location access is denied',
          'Displays current temperature and city name',
          'Built with vanilla JavaScript, HTML5 and CSS3 — integrated with OpenWeatherMap API'
        ],
        fr: [
          'Détection automatique de la position via les coordonnées GPS pour récupérer les données météo en temps réel',
          'Recherche manuelle d\'une ville — bascule sur Paris par défaut si l\'accès à la position est refusé',
          'Affiche la température actuelle et le nom de la ville',
          'Développé en JavaScript pur, HTML5 et CSS3 — intégré avec l\'API OpenWeatherMap'
        ]
      }
    },
    {
      id: 6,
      name: { en: 'The right Price', fr: 'Le juste prix' },
      category: 'Frontend',
      type: { en: 'Personal', fr: 'Personnel' },
      year: { en: '2025', fr: '2025' },
      color: 'pink',
      private: false,
      hasDemo: true,
      screenshots: [],
      videoUrl: 'https://www.youtube.com/embed/k6b-_X4SqtA',
      tags: ['JavaScript', 'HTML', 'CSS', 'Git'],
      github: 'https://github.com/Ikram-Boussif/price-guessing-game',
      description: {
        en: 'This project is an interactive game built with JavaScript, HTML and CSS (Bootstrap). The user must guess a randomly generated number between 0 and 1000, receiving feedback after each guess on whether it is too low, too high, or correct.',
        fr: 'Ce projet est un jeu interactif construit avec JavaScript, HTML et CSS (Bootstrap). L\'utilisateur doit deviner un nombre généré aléatoirement entre 0 et 1000, avec un retour après chaque tentative indiquant si le nombre est trop bas, trop haut, ou correct.'
      },
      bullets: {
        en: [
          'Random integer generation between 0 and 1000',
          'Input validation to ensure a valid number is entered',
          'Feedback message displayed after each guess (higher/lower/correct)',
          'Input disabled automatically once the correct number is guessed',
          'Error message shown for invalid input',
          'Responsive design'
        ],
        fr: [
          'Génération d\'un nombre entier aléatoire entre 0 et 1000',
          'Validation de la saisie pour s\'assurer qu\'un nombre valide est entré',
          'Message de retour affiché après chaque tentative (plus haut/plus bas/correct)',
          'Saisie désactivée automatiquement une fois le nombre correctement deviné',
          'Message d\'erreur affiché en cas de saisie invalide',
          'Design responsive'
        ]
      }
    }
  ];


  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    const found = this.projects.find(p => p.id === id);
    this.project.set(found || null);
  }

  openZoom(src: string) {
    this.zoomedImage.set(src);
  }

  closeZoom() {
    this.zoomedImage.set(null);
  }

  setTab(tab: 'overview' | 'demo') {
    this.activeTab.set(tab);
  }
  goBack() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }
}
