import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./home-page.component').then((m) => m.HomePageComponent)
    },
    {
        path: 'settings',
        loadComponent: () =>
            import('./settings-page.component').then((m) => m.SettingsPageComponent)
    }
];
