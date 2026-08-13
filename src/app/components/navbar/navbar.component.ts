import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  theme = inject(ThemeService);
  router = inject(Router);
  language = inject(LanguageService);
}
