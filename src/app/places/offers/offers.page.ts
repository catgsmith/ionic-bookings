import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];
  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.offers = this.placesService.getPlaces();
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    //console.log('Editing item: ', offerId);
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId])
  }
}
