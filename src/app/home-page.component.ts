import { Component } from '@angular/core';
import { FeaturesSectionComponent } from './features-section.component';
import { HeroSectionComponent } from './hero-section.component';

@Component({
    selector: 'bob-home-page',
    template: `
        <hero-section></hero-section>
        <features-section></features-section>
    `,
    standalone: true,
    imports: [HeroSectionComponent, FeaturesSectionComponent]
})

export class HomePageComponent {}