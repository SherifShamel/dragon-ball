import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home-component';
import { Planets } from './features/components/planets/planets';
import { NotfoundComponent } from './features/components/notfound-component/notfound-component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'planets', component: Planets, title: 'Planets' },
  {
    path: 'c_details/:char_name/:char_id',
    loadComponent: () =>
      import('./features/components/character-details/character-details').then(
        (c) => c.CharacterDetails
      ),
    title: 'Character Details',
    pathMatch: 'prefix',
  },
  {
    path: 'p_details/:p_id',
    loadComponent: () =>
      import(
        './features/components/PlanetDetails/planet-details-component/planet-details-component'
      ).then((c) => c.PlanetDetailsComponent),
    title: 'Character Details',
    pathMatch: 'prefix',
  },

  { path: '**', component: NotfoundComponent, title: 'Not Found' },
];
