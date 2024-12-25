import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  changeTheme(theme: string) {
    const existingLink = document.getElementById(
      'theme-link'
    ) as HTMLLinkElement;
    if (existingLink) {
      existingLink.href = `${theme}.css`; // Update existing theme
    } else {
      const link = document.createElement('link');
      link.id = 'theme-link';
      link.rel = 'stylesheet';
      link.href = `${theme}.css`; // Update existing theme
      document.head.appendChild(link);
    }
  }
}
