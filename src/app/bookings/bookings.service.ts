import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings: Booking[] = [
    new Booking (
      'b001', 'p1', 'usr01', 'Acadia national park', 2
    ),
    { id: 'b002', placeId: 'p2', placeTitle: 'Manhattan Mansion', guestNumber: 1, userId: 'usr02'}
  ];

  constructor() { }

  public get bookings(): Booking[] {
    return [...this._bookings]; // clone with spread operator
  }

  cancelBooking(bookingId: string) {
    this._bookings = this._bookings.filter(booking => {
      return booking.id !== bookingId;
    });
    console.log(this._bookings); 
  }
}
