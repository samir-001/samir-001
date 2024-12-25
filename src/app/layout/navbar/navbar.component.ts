import { Component, OnInit } from '@angular/core';
import { navLinks } from './navLinks';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { NgClass, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TranslationService } from '../../core/services/translation.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    TranslateModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public currentLang = 'en';
  constructor(private translationService: TranslationService) {}
  title = 'samir-001';

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = navLinks;
  }
  changeLang() {
    this.translationService.changeLang();
  }
}
