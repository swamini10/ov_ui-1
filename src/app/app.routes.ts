import { Routes } from '@angular/router';

export const routes: Routes = [
<<<<<<< HEAD
<<<<<<< HEAD
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
=======
  { path: '', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
>>>>>>> a4967df7d97fc81d48c9e46476c153ada1a90259
=======
  // Lazy loading - LoginComponent loads at root path
  { path: '', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  // Lazy loading - Home component loads only when navigating to /home
  { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
  {path: '**', redirectTo: ''}  // Wildcard route to catch undefined paths and redirect to login
>>>>>>> 39e31ddc8c1b5d6945594cfea783aa17128e2835
];
