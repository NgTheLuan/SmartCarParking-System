import { Observable } from 'rxjs';
import { CarParking } from './../model/CarParking';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ScpsService {
  //Realtime DB
  private dbPath = 'smartcarparkingsystem/carparking';
  carparkingRef: AngularFireList<CarParking> = null;

  //Firestore
  carparkingsCollection: AngularFirestoreCollection<CarParking>;
  carparkings: Observable<CarParking[]>;

  constructor(private db: AngularFireDatabase, public afs: AngularFirestore) {
    //Realtime DB
    this.carparkingRef = db.list(this.dbPath);

    //Firestore
    this.carparkingsCollection = this.afs.collection('carparkings', (ref) =>
      ref.orderBy('area', 'asc')
    );
  }

  getAll(): AngularFireList<CarParking> {
    return this.carparkingRef;
  }

  create(carparking: CarParking): any {
    return this.carparkingRef.push(carparking);
  }

  // update(key: string, value: any): Promise<void> {
  //   return this.tutorialsRef.update(key, value);
  // }

  // delete(key: string): Promise<void> {
  //   return this.tutorialsRef.remove(key);
  // }

  deleteAll(): Promise<void> {
    return this.carparkingRef.remove();
  }

  //Firestore
  getcarparking() {
    return this.carparkings;
  }
}
