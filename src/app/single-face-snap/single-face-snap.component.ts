import { Component,  OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;

  isSnapped! :  boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute){

  }

  ngOnInit() {
    this.isSnapped =false;
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$=this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onAddSnap(faceSnapId: number) {
    if (this.isSnapped===false){
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.isSnapped=true ) 
      );
    }else{
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() =>  this.isSnapped=false) 
      );       

    }  
  } 
   

}
