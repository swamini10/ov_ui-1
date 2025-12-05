import { Routes } from '@angular/router';

export const routes: Routes = [
<<<<<<< HEAD
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
=======
  { path: '', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
>>>>>>> a4967df7d97fc81d48c9e46476c153ada1a90259
];
