import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from 'src/app/models/face-snap.model';
import { FaceSnapService } from 'src/app/services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  snapped:boolean = false;

  constructor(private faceSnapeService:FaceSnapService){
  }

  ngOnInit(){
  }

  onAddSnap()
  {
    if (this.snapped){
      this.faceSnapeService.snapFaceSnapById(this.faceSnap.id,'unsnap' );
    }else{
      this.faceSnapeService.snapFaceSnapById(this.faceSnap.id,'snap' );
    }
    //this.faceSnap.snaps = this.snapped ? this.faceSnap.snaps - 1 : this.faceSnap.snaps + 1;
    this.snapped = !this.snapped;
  }
}
