import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from 'src/app/models/face-snap.model';
import { FaceSnapService } from 'src/app/services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  snapped:boolean = false;
  faceSnap!:FaceSnap;

  constructor(private faceSnapeService:FaceSnapService,
    private route:ActivatedRoute){
  }

  ngOnInit(){
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapeService.getFaceSnapById(snapId);
   }

  onAddSnap()
  {
    if (this.snapped){
      this.faceSnapeService.snapFaceSnapById(this.faceSnap.id,'unsnap' );
    }else{
      this.faceSnapeService.snapFaceSnapById(this.faceSnap.id,'snap' );
    }
    //this.faceSnap.snaps = this.snapped ? this.faceSnap.snaps - 1 : this.faceSnap.snaps + 1;
  }
}
