import { Component, OnInit } from '@angular/core';
import { CarParking } from '../model/CarParking';
import { ScpsService } from '../service/scps.service';

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  carparking: CarParking = new CarParking();
  submitted = false;

  //Storage
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  downloadURL: Observable<string>;
  image: string;

  constructor(private scpsService: ScpsService, private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  saveCarParking(): void {
    this.scpsService.create(this.carparking).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newCarParking(): void {
    this.submitted = false;
    this.carparking = new CarParking();
  }


  async upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL()
        this.downloadURL.subscribe(url => (this.image = url));
      })
    )
      .subscribe();
  }


}
