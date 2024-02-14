import { Component } from '@angular/core';
import { FeaturesSectionComponent } from './features-section.component';

@Component({
    selector: 'settings-page',
    template: `
        <section class="px-24 py-32 bg-gray bg-opacity-5">
            <p class="text-center text-3xl">
                SETTINGS.
            </p>
        </section>
        <features-section></features-section>
    `,
    standalone: true,
    imports: [FeaturesSectionComponent]
})

export class SettingsPageComponent {}