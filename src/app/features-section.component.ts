import { Component } from '@angular/core';

@Component({
    selector: 'bob-features-section',
    template: `
        <section class="p-16">
            <ul class="flex justify-center items-center gap-4">
                <li>Fast</li>
                <li>Efective</li>
                <li>Save</li>
            </ul>
        </section>
    `,
    standalone: true
})

export class FeaturesSectionComponent {}