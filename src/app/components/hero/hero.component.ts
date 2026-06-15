import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  showVideo = false;

   roles = [
    'Frontend Angular Developer',
    'Angular Migration Expert',
    'Fintech Web Developer',
    'UI/UX Enthusiast'
  ];

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
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
    clearInterval(this.cursorTimer);
  }

  private startTypewriter() {
    const currentRole = this.roles[this.roleIndex];

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
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
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
