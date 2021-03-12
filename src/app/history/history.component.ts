import { ScpsService } from './../service/scps.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
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
}
