import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private lang: string = localStorage.getItem('lang') || 'ar';

  constructor(private translateService: TranslateService) {
    // Initialize language settings
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', this.lang);
    }
    this.translateService.setDefaultLang(this.lang);
    this.setDirection(this.lang === 'ar' ? 'rtl' : 'ltr');
  }

  /**
   * Gets the current language
   * @returns The current language (ar or en)
   */
  public getLang(): string {
    return this.lang;
  }

  /**
   * Changes the language to the opposite one (ar -> en or en -> ar)
   * and updates the local storage and UI settings.
   */
  public changeLang(): void {
    this.lang = this.lang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', this.lang);
    window.location.reload();
  }

  /**
   * Sets the text direction for the application.
   * @param direction The direction to set ('rtl' or 'ltr').
   */
  private setDirection(direction: 'rtl' | 'ltr'): void {
   
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('dir', direction);

    const bodyElement = document.body;
    bodyElement.style.direction = direction;
  }
}
