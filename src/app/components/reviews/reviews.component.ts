import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Review } from '../../types/types';
import { ReviewsService } from '../../services/reviews.service';

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

  constructor(private reviewService: ReviewsService) {
  }

  reviews: Review[] = [];

  ngOnInit() {
    this.fetchBookings();
  }

  fetchBookings() {
    this.reviewService.getAllReviews().subscribe((res: any) => {
      if (res && res.data) {
        this.reviews = res.data;
      }
    })
  }
}
