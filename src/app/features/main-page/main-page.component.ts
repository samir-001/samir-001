import { Component } from '@angular/core';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ClientsComponent } from './components/clients/clients.component';

@Component({
    selector: 'app-main-page',
    imports: [MainSectionComponent, SkillsComponent, TestimonialComponent, ClientsComponent],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
