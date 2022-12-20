import { Component, OnInit } from '@angular/core';
import { FaceSnap } from 'src/app/models/face-snap.model';
import { FaceSnapService } from 'src/app/services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!:FaceSnap[];

  constructor(private faceSnapsService: FaceSnapService){
    
  }

  ngOnInit():void{
    this.faceSnaps = this.faceSnapsService.faceSnaps;
  }
}
