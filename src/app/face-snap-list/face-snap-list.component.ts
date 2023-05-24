import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';
import { Observable, Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy{


  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>

  private destroy$!: Subject<boolean>;

constructor(private faceSnapsService:FaceSnapsService ){

}
  ngOnInit() {

    this.faceSnaps$= this.faceSnapsService.getAllFaceSnaps();



    //initialisation de l'objet subject
    this.destroy$ = new Subject<boolean>();

  //  this.faceSnaps= this.faceSnapsService.getAllFaceSnaps();

    //observable interval pour créer une fuite de mémoire 
    interval(1000).pipe(
      // Si je souhaite qu'il prenne un nombre d'instance avant de s'arreter 
      //  take(5),
      //Si je souhaite détruire l'observable à un event précis
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
   
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
