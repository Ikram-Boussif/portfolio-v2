import { Component, inject, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [NgIf, FormsModule, ScrollAnimationDirective]
})
export class ContactComponent {

  name = signal('');
  email = signal('');
  message = signal('');
  isLoading = signal(false);
  isSuccess = signal(false);
  isError = signal(false);

  lang = inject(LanguageService);

  texts = {
  title: { en: 'Let\'s ', fr: 'Travaillons ' },
  titleGradient: { en: 'Work Together', fr: 'Ensemble' },
  subtitle: { en: 'Have a project in mind or just want to say hi? I\'d love to hear from you.', fr: 'Vous avez un projet en tête ou souhaitez simplement me contacter ? Je serais ravie de vous lire.' },
  name: { en: 'Name', fr: 'Nom' },
  email: { en: 'Email', fr: 'Email' },
  message: { en: 'Message', fr: 'Message' },
  namePlaceholder: { en: 'Your name', fr: 'Votre nom' },
  emailPlaceholder: { en: 'your@email.com', fr: 'votre@email.com' },
  messagePlaceholder: { en: 'Tell me about your project or opportunity...', fr: 'Parlez-moi de votre projet ou opportunité...' },
  send: { en: 'Send Message ↗', fr: 'Envoyer ↗' },
  sending: { en: 'Sending...', fr: 'Envoi...' },
  success: { en: 'Message sent successfully! I\'ll get back to you soon.', fr: 'Message envoyé ! Je vous répondrai bientôt.' },
  error: { en: 'Something went wrong. Please try again.', fr: 'Une erreur s\'est produite. Veuillez réessayer.' }
};

  async sendEmail() {
    if (!this.name() || !this.email() || !this.message()) return;

    this.isLoading.set(true);
    this.isSuccess.set(false);
    this.isError.set(false);

    try {
      await emailjs.send(
        environment.emailjsServiceId,
        environment.emailjsTemplateId,
        {
          name: this.name(),
          email: this.email(),
          message: this.message(),
          time: new Date().toLocaleString()
        },
        environment.emailjsPublicKey
      );

      this.isSuccess.set(true);
      this.name.set('');
      this.email.set('');
      this.message.set('');

    } catch (error) {
      this.isError.set(true);
    } finally {
      this.isLoading.set(false);
    }
  }
}
