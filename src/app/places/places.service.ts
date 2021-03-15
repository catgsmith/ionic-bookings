import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    new Place(
      'p1',
      'Acadia national park',
      'In the heart of the fashion city',
      'https://www.nps.gov/acad/planyourvisit/images/Kent_Bass-Harbor.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      375.0,
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'abc'
    ),
    new Place(
      'p2',
      'Manhattan Mansion',
      'Manhattan is the most densely populated of New York City’s 5 boroughs. ',
      'https://upload.wikimedia.org/wikipedia/commons/5/54/William_A._Clark_House%2C_Manhattan.jpg',
      309,
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'abc'
    ),
    new Place(
      'p3',
      "L'Amour Toujour",
      'A romantic place in Paris',
      'https://cdn.pixabay.com/photo/2016/07/03/17/48/lost-places-1495150_960_720.jpg',
      109.99,
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'abc'
    )
  ];

  constructor() { }

  getPlaces() {
    return [...this.places];
  }

  getPlace(id: string) {
    return {...this.places.find(place => place.id === id)}; // clone with spread operator
  }
}
