import { Component, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../button/button.component';
import { Booking } from '../../types/types';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-content-form',
  standalone: true,
  imports: [FaIconComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './content-form.component.html',
  styleUrl: './content-form.component.css'
})
export class ContentFormComponent {
  playIcon = faPlay
  bookingForm: FormGroup;
  toastr: any;

  constructor(private fb: FormBuilder, toastr: ToastrService, private bookingService: BookingsService) {
    this.toastr = toastr;
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      num_people: ['', Validators.required],
      booking_date: ['', Validators.required],
      notes: ['']
    });
  }


  onSubmit(event: Event) {
    event.preventDefault();
    const bookingDetails = this.bookingForm.value as Booking;
    console.log(bookingDetails);

    if (this.bookingForm.valid) {
      const bookingDetails = this.bookingForm.value as Booking;

      this.bookingService.createBooking(bookingDetails).subscribe((res: any) => {
        this.toastr.info("Prenotazione Creata", "Successo");
        this.bookingForm.reset();
      });
    } else {
      this.toastr.error("Per piacere compila il form correttamente", "Errore");
      console.error('Form is invalid!');
    }
  }
}
