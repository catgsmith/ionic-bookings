import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { } // private router: Router (replaced)

  ngOnInit() {
  }

  async onBookPlace() {
    // choose 1 of three options for back navigation:-
    // this.router.navigateByUrl('/places/tabs/discover'); // 1. but shows forward animation 
    // this.navCtrl.navigateBack('/places/tabs/discover'); // 2. improved by showing backward animation
    //this.navCtrl.pop(); // 3. but popping doesn't work if the stack of pages is empty
    const modal = await this.modalCtrl.create({
      component: CreateBookingComponent
    });   
    return await modal.present();
  }
}
