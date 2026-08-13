import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss',
  imports: [NgIf]
})
export class ScrollTopComponent implements OnInit, OnDestroy {

  isVisible = signal(false);

  private scrollListener = () => {
    this.isVisible.set(window.scrollY > 400);
  };

  ngOnInit() {
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
