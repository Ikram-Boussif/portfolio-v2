import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  lang = signal<Lang>('en');

  toggle() {
    this.lang.update(l => l === 'en' ? 'fr' : 'en');
  }

  t(translations: { en: string; fr: string }): string {
    return translations[this.lang()];
  }
}
