import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap', // Modifier le sélecteur ici
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})


export class FaceSnapComponent implements OnInit {
    @Input() faceSnap!: FaceSnap;
  isSnapped! :  boolean;

  ngOnInit() {
    this.isSnapped =false;
  }
  onAddSnap() {
    if (this.isSnapped===false){
       this.faceSnap.snaps++;
       this.isSnapped=true;
    }else{
      this.faceSnap.snaps--;
      this.isSnapped=false;
    }  } 
   

}