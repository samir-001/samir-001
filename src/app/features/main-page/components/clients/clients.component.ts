import { Component, OnInit } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {
  responsiveOptions!: CarouselResponsiveOptions[] 
  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 6,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
    ];
  }
}
