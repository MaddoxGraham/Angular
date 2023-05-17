import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];
  ShepSnap!: FaceSnap;
  ThaneSnap!: FaceSnap;
  GarrusSnap!: FaceSnap;


  ngOnInit() {

    this.faceSnaps=[
{
    title:'John Shepard',
    description:  'Normandy\'s Commander',
    imageUrl:  'https://i.pinimg.com/564x/57/c1/71/57c171b8fd242ca1d6ced472250b3ef4.jpg',
    createdDate : new Date(),
    snaps:  140,
    location:  'SR2-Normandy Captain\'s cabin'
},
{
  title:'Thane Krios',
  description:'Skilled Assassin',
  imageUrl:'https://i.pinimg.com/564x/0e/c0/54/0ec054af0902a92cfd4ec457cd7ddc7e.jpg',
  createdDate:  new Date(),
  snaps: 0
},{
  title:'Garrus Vakarian',
  description: 'Need some calibration',
  imageUrl: 'https://i.pinimg.com/564x/b2/0c/50/b20c50ac30f88e9554cbbdb46a1f4e89.jpg',
  createdDate:new Date(),
  snaps: 0,
  location:'SR2-Normandy big canon room'
},{
  title:'Legion',
  description: 'This unit have a soul',
  imageUrl: 'https://i.pinimg.com/564x/ce/89/84/ce89841db53c12cdf792a68cbffe8630.jpg',
  createdDate:new Date(),
  snaps: 12
},{
  title:'The little one',
  description: 'This is the cutess thing i\'ve ever seen ',
  imageUrl: 'https://i.pinimg.com/564x/cd/3d/db/cd3ddbe30243fa1691f5e11d7532d997.jpg',
  createdDate:new Date(),
  snaps: 112,
  location:'SR2-Normandy Captain\'s cabin'
}
    ];
   
  }
}