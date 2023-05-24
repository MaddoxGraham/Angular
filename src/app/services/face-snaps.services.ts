import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { HttpClient } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";

    @Injectable({
        providedIn:'root'
    })

export class FaceSnapsService {

  constructor(private http: HttpClient) {}
    faceSnaps: FaceSnap[] =[
        // {
        //     id:1,
        //     title:'John Shepard',
        //     description:  'Normandy\'s Commander',
        //     imageUrl:  'https://i.pinimg.com/564x/57/c1/71/57c171b8fd242ca1d6ced472250b3ef4.jpg',
        //     createdDate : new Date(),
        //     snaps:  140,
        //     location:  'SR2-Normandy Captain\'s cabin'
        // },
        // {
        //   id:2,
        //   title:'Thane Krios',
        //   description:'Skilled Assassin',
        //   imageUrl:'https://i.pinimg.com/564x/0e/c0/54/0ec054af0902a92cfd4ec457cd7ddc7e.jpg',
        //   createdDate:  new Date(),
        //   snaps: 0
        // },{
        //   id:3,
        //   title:'Garrus Vakarian',
        //   description: 'Need some calibration',
        //   imageUrl: 'https://i.pinimg.com/564x/b2/0c/50/b20c50ac30f88e9554cbbdb46a1f4e89.jpg',
        //   createdDate:new Date(),
        //   snaps: 0,
        //   location:'SR2-Normandy big canon room'
        // },{
        //   id:4,
        //   title:'Legion',
        //   description: 'This unit have a soul',
        //   imageUrl: 'https://i.pinimg.com/564x/ce/89/84/ce89841db53c12cdf792a68cbffe8630.jpg',
        //   createdDate:new Date(),
        //   snaps: 12
        // },{
        //   id:5,
        //   title:'The little one',
        //   description: 'This is the cutess thing i\'ve ever seen ',
        //   imageUrl: 'https://i.pinimg.com/564x/cd/3d/db/cd3ddbe30243fa1691f5e11d7532d997.jpg',
        //   createdDate:new Date(),
        //   snaps: 112,
        //   location:'SR2-Normandy Captain\'s cabin'
        // }
            ];


            
            getAllFaceSnaps():Observable<FaceSnap[]>{
              return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
            }

            // getAllFaceSnaps():FaceSnap[]{
            //   return this.faceSnaps;
            // }

            getFaceSnapById(faceSnapId: number):Observable<FaceSnap>{
              return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
            }

            snapFaceSnapById(faceSnapid: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
              // const faceSnap = this.getFaceSnapById(faceSnapid);
              // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
           
              return this.getFaceSnapById(faceSnapid).pipe(
                map(faceSnap => ({
                  ...faceSnap,
                  snaps:faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
                })),
                switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapid}`,updatedFaceSnap))
              )

            }
            
            // unsnapFaceSnapById(faceSnapid: number): void {
            //   const faceSnap = this.faceSnaps.find((faceSnap: FaceSnap) => faceSnap.id === faceSnapid);
            //   if (faceSnap) {
            //     faceSnap.snaps--;
            //   }else{
            //     throw new Error('FaceSnap not found');
            //   }
            // }

            //Ajouter un snap du formulaire 
            addFaceSnap(FormValue: { title:string, description: string , imageUrl : string, location?: string }): Observable<FaceSnap>{

              return this.getAllFaceSnaps().pipe(
                map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
                map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
                map(previousFacesnap => ({
                   ...FormValue,
                   snaps: 0,
                   createdDate: new Date(),
                   id: previousFacesnap.id + 1
               })),
               switchMap(newFacesnap => this.http.post<FaceSnap>(
                   'http://localhost:3000/facesnaps',
                   newFacesnap)
               )
           );


              // const faceSnap : FaceSnap ={
              //   ...FormValue,
              //   createdDate: new Date(),
              //   snaps: 0,
              //   id: this.faceSnaps[this.faceSnaps.length-1].id +1
              // }
              // this.faceSnaps.push(faceSnap);
            }
}