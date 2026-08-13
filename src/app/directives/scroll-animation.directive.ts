import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[scrollAnimation]'
})
export class ScrollAnimationDirective {

  @Input() animationClass = 'animate-in';
  @Input() threshold = 0.1;
  @Input() direction: 'left' | 'right' | 'up' = 'up';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.classList.add(`scroll-hidden-${this.direction}`);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(this.animationClass);
            entry.target.classList.remove(`scroll-hidden-${this.direction}`);
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -150px 0px'
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

}
