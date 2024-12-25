import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ThemingService } from './core/services/theming.service';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, TranslateModule, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    public translateService: TranslateService,
    private themes: ThemingService
  ) {
  }
  title = 'Samir-001';
}
