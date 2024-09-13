import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [FaIconComponent, CarouselModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  quoteIcon = faQuoteLeft;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    center: true,
    touchDrag: false,
    margin: 15,
    pullDrag: false,
    dots: true,
    navSpeed: 1500,
    autoplaySpeed: 1500,
    dotsSpeed: 1100,
    navText: ['', ''],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  reviews = [
    { name: "Client Name", jobTitle: "Professor", picture: "https://themewagon.github.io/restoran/img/testimonial-1.jpg" },
    { name: "Another Client", jobTitle: "Designer",  picture: "https://themewagon.github.io/restoran/img/testimonial-2.jpg" },
    { name: "Angelo Cipullo", jobTitle: "Developer",  picture: "https://themewagon.github.io/restoran/img/testimonial-3.jpg" },
    { name: "Jack Black", jobTitle: "Actor",  picture: "https://themewagon.github.io/restoran/img/testimonial-4.jpg"}
  ]
}
