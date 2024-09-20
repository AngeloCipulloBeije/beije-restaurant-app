import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http: HttpClient) {
  }

  private BASE_URL = "http://localhost:3000/api/bookings"

  getBookings() {
    return this.http.get(`${this.BASE_URL}/`)
  }

  createBooking(booking: Booking) {
    return this.http.post(`${this.BASE_URL}/`, booking);
  }

  deleteBooking(id: number) {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }

}
