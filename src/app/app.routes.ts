import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component')
    .then(m => m.HomeComponent)
  },
  {
    path: 'projects/:id',
    loadComponent: () => import('./components/project-detail/project-detail.component')
    .then(m => m.ProjectDetailComponent)
  }
];
