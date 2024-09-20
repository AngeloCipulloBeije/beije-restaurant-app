import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { BookingsService } from '../../services/bookings.service';
import { Booking } from '../../types/types';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPerson, faTrash } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FaIconComponent, LayoutComponent, BreadcrumbComponent, DatePipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private bookingService: BookingsService) {
  }
  peopleIcon = faPerson;
  trashIcon = faTrash;
  bookings: Booking[] = [];

  ngOnInit() {
    this.fetchBookings();
  }

  fetchBookings() {
    this.bookingService.getBookings().subscribe((res: any) => {
      if (res && res.data) {
        this.bookings = res.data;
      }
    })
  }

  deleteBooking(id: number) {
    this.bookingService.deleteBooking(id).subscribe(res => {
      this.fetchBookings();
    });
  }

}
