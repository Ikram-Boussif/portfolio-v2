import { Component, signal, inject, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {

  lang = inject(LanguageService);
  showVideo = false;

  currentQuoteIndex = signal(0);
  isPaused = false;
  private quoteTimer: any;

  texts = {
    badge: { en: 'available for opportunities', fr: 'disponible pour de nouvelles opportunités' },
    greeting: { en: 'Hi, I\'m', fr: 'Bienvenue, je suis' },
    description: {
      en: '3 years crafting production-grade fintech platforms with Angular & Spring Boot. I build things that perform, scale, and last.',
      fr: '3 ans à concevoir des plateformes fintech de production avec Angular & Spring Boot. Je construis des apps performantes, scalables et durables.'
    },
    viewProjects: { en: 'View projects', fr: 'Voir les projets' },
    // askMe: { en: 'Ask me anything ✦', fr: 'Posez-moi une question ✦' },
    askMe: { en: 'Contact Me', fr: 'Me contacter' },
    yearsExp: { en: 'years exp.', fr: 'ans d\'exp.' },
    perfBoost: { en: 'perf. boost', fr: 'perf. améliorée' },
    migrationLed: { en: 'Angular migration', fr: 'migration Angular' },
    projects: { en: 'projects', fr: 'projets' },
    roles: {
      en: ['Full Stack Developer', 'Angular & Spring Boot Dev', 'Fintech Web Developer', 'UI/UX Enthusiast'],
      fr: ['Développeuse Full Stack', 'Dev Angular & Spring Boot', 'Développeuse Web Fintech', 'Passionnée UI/UX']
    }
  };

  quotes = [
    { text: '"The only way to do great work is to love what you do."', author: '— Steve Jobs' },
    { text: '"Code is like humor. When you have to explain it, it\'s bad."', author: '— Cory House' },
    { text: '"First, solve the problem. Then, write the code."', author: '— John Johnson' }
  ]

  get currentQuote() {
    return this.quotes[this.currentQuoteIndex()];
  }

  startQuoteRotation() {
    this.quoteTimer = setInterval(() => {
      if (!this.isPaused) {
        this.currentQuoteIndex.update(i =>
          (i + 1) % 3
        );
      }
    }, 4000);
  }

  pauseQuote() { this.isPaused = true; }
  resumeQuote() { this.isPaused = false; }

  setQuote(index: number) {
    this.currentQuoteIndex.set(index);
  }

  displayedText = signal('');
  showCursor = signal(true);

  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: any;
  private cursorTimer: any;

  ngOnInit() {
    this.startTypewriter();
    this.startCursorBlink();
    this.startQuoteRotation();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
    clearInterval(this.cursorTimer);
    clearInterval(this.quoteTimer);
  }

  private startTypewriter() {
    const roles = this.texts.roles[this.lang.lang()];
    const currentRole = roles[this.roleIndex % roles.length];

    if (this.isDeleting) {
      this.displayedText.set(currentRole.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.displayedText.set(currentRole.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let speed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % roles.length;
      speed = 400;
    }

    this.timer = setTimeout(() => this.startTypewriter(), speed);
  }

  private startCursorBlink() {
    this.cursorTimer = setInterval(() => {
      this.showCursor.update(v => !v);
    }, 500);
  }
}
