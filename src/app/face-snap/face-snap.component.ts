import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap', // Modifier le sélecteur ici
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})


export class FaceSnapComponent implements OnInit {
    @Input() faceSnap!: FaceSnap;
  isSnapped! :  boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router){

  }

  ngOnInit() {
    this.isSnapped =false;
  }
  onAddSnap() {
    if (this.isSnapped===false){
       this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
       this.isSnapped=true;
    }else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.isSnapped=false;
    }  } 
   
    onViewFaceSnap(){
      this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`);
    }

}