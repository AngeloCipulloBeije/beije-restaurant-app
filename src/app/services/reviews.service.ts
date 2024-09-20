import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) {
  }

  private BASE_URL = "http://localhost:3000/api/reviews"

  getAllReviews() {
    return this.http.get(`${this.BASE_URL}/`)
  }
}
