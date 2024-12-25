import { Component } from '@angular/core';
import { MainSectionComponent } from './components/main-section/main-section.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MainSectionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
