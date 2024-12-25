import { Component, OnInit } from '@angular/core';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [TestimonialCardComponent, CarouselModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent implements OnInit {
  responsiveOptions!: CarouselResponsiveOptions[]  ;
  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
