import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Booking } from './booking.model';
import { BookingsService } from './bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];
  bookingsSubs: Subscription;

  constructor(private bookingsService: BookingsService) { }

  ngOnInit() {
    this.bookingsSubs = this.bookingsService.bookingsChanged.subscribe(() => {
      this.loadedBookings = this.bookingsService.bookings;
    })
    this.bookingsService.bookingsChanged.next();
  }

  ngOnDestroy(): void {
    this.bookingsSubs.unsubscribe();
  }
  
  onCancelBooking(bookingId: string, slidingBooking: IonItemSliding) {
    slidingBooking.close();
    this.bookingsService.cancelBooking(bookingId);
  }
}
