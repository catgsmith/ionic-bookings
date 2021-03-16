import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(private route: ActivatedRoute, private placesService: PlacesService, private navCtrl: NavController, private modalCtrl: ModalController) { } // private router: Router (replaced)

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  async onBookPlace() {
    // choose 1 of three options for back navigation:-
    // this.router.navigateByUrl('/places/tabs/discover'); // 1. but shows forward animation 
    // this.navCtrl.navigateBack('/places/tabs/discover'); // 2. improved by showing backward animation
    //this.navCtrl.pop(); // 3. but popping doesn't work if the stack of pages is empty
    const modal = await this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place }
    }); 
    
    modal.onDidDismiss()
      .then((resultData) => {
          console.log(resultData.data, resultData.role);
          if (resultData.role === 'confirm') {
            console.log('BOOKED!');
          }
      });
    return await modal.present();
  }
}
