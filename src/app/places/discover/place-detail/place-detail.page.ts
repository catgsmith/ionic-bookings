import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private navCtrl: NavController) { } // private router: Router (replaced)

  ngOnInit() {
  }

  onBookPlace() {
    // choose 1 of three options for back navigation:-
    //this.router.navigateByUrl('/places/tabs/discover'); // 1. but shows forward animation 
    this.navCtrl.navigateBack('/places/tabs/discover');   // 2. improved by showing backward animation

    //this.navCtrl.pop(); // 3. but popping doesn't work if the stack of pages is empty
  }


}
