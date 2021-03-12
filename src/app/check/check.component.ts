import { ScpsService } from './../service/scps.service';
// import { CarParking } from './../model/CarParking';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
})
export class CheckComponent implements OnInit {
  carparkings: any;
  currentCarParking: null;
  currentIndex: -1;

  constructor(private scpsService: ScpsService) {}

  ngOnInit(): void {
    this.retrieveCarParking();
  }

  refreshList(): void {
    this.currentCarParking = null;
    this.currentIndex = -1;
    this.retrieveCarParking();
  }

  retrieveCarParking(): void {
    this.scpsService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((data) => {
        this.carparkings = data;
      });
  }

  setActiveCarParking(carparking, index): void {
    this.currentCarParking = carparking;
    this.currentIndex = index;
  }

  removeAllCarParking(): void {
    this.scpsService
      .deleteAll()
      .then(() => this.refreshList())
      .catch((err) => console.log(err));
  }

  getColor(Color) {
    switch (Color) {
      case 'True':
        return 'red';
      case 'False':
        return 'gray';
    }
  }

  totoaltime() {}
}
