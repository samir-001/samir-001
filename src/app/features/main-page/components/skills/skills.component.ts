import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCardComponent, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  public skills = [
    { Title: 'asdasd', Description: 'asdasd', Icon: 'crm' },
    { Title: 'asdasd', Description: 'asdasd', Icon: 'educational' },
    { Title: 'asdasd', Description: 'asdasd', Icon: 'webStore-02' },
    { Title: 'asdasd', Description: 'asdasd', Icon: 'ERP' },
  ];
}
