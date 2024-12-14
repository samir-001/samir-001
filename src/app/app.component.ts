import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public translateService:TranslateService) {
    this.translateService.setDefaultLang('en');
  }
  title = 'samir-001';
  changeLanguage() {
    this.translateService.use('ar');
  }
}
