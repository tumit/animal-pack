import { Routes } from '@angular/router';
import { DirectedByComponent } from './directed-by/directed-by.component';
import { WhoAmIComponent } from './who-am-i.component';

export const routes: Routes = [
  { path: 'directed-by/:director', component: DirectedByComponent }
];
