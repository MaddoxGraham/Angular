import { Component,  OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap;
  isSnapped! :  boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute){

  }

  ngOnInit() {
    this.isSnapped =false;
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap=this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onAddSnap() {
    if (this.isSnapped===false){
       this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
       this.isSnapped=true;
    }else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.isSnapped=false;
    }  } 
   

}
