import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

    @Injectable({
        providedIn:'root'
    })

export class FaceSnapsService {


    
    faceSnaps: FaceSnap[] =[
        {
            id:1,
            title:'John Shepard',
            description:  'Normandy\'s Commander',
            imageUrl:  'https://i.pinimg.com/564x/57/c1/71/57c171b8fd242ca1d6ced472250b3ef4.jpg',
            createdDate : new Date(),
            snaps:  140,
            location:  'SR2-Normandy Captain\'s cabin'
        },
        {
          id:2,
          title:'Thane Krios',
          description:'Skilled Assassin',
          imageUrl:'https://i.pinimg.com/564x/0e/c0/54/0ec054af0902a92cfd4ec457cd7ddc7e.jpg',
          createdDate:  new Date(),
          snaps: 0
        },{
          id:3,
          title:'Garrus Vakarian',
          description: 'Need some calibration',
          imageUrl: 'https://i.pinimg.com/564x/b2/0c/50/b20c50ac30f88e9554cbbdb46a1f4e89.jpg',
          createdDate:new Date(),
          snaps: 0,
          location:'SR2-Normandy big canon room'
        },{
          id:4,
          title:'Legion',
          description: 'This unit have a soul',
          imageUrl: 'https://i.pinimg.com/564x/ce/89/84/ce89841db53c12cdf792a68cbffe8630.jpg',
          createdDate:new Date(),
          snaps: 12
        },{
          id:5,
          title:'The little one',
          description: 'This is the cutess thing i\'ve ever seen ',
          imageUrl: 'https://i.pinimg.com/564x/cd/3d/db/cd3ddbe30243fa1691f5e11d7532d997.jpg',
          createdDate:new Date(),
          snaps: 112,
          location:'SR2-Normandy Captain\'s cabin'
        }
            ];
            getAllFaceSnaps():FaceSnap[]{
              return this.faceSnaps;
            }

            getFaceSnapById(faceSnapId: number): FaceSnap{
              const faceSnap = this.faceSnaps.find((faceSnap: FaceSnap) => faceSnap.id === faceSnapId);
              if (!faceSnap) {
                throw new Error('FaceSnap not found');
              }else{
                return faceSnap;
              }
            }

            snapFaceSnapById(faceSnapid: number, snapType: 'snap' | 'unsnap'): void {
              const faceSnap = this.getFaceSnapById(faceSnapid);
              snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
            }
            
            // unsnapFaceSnapById(faceSnapid: number): void {
            //   const faceSnap = this.faceSnaps.find((faceSnap: FaceSnap) => faceSnap.id === faceSnapid);
            //   if (faceSnap) {
            //     faceSnap.snaps--;
            //   }else{
            //     throw new Error('FaceSnap not found');
            //   }
            // }
}