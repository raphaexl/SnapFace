import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from 'src/app/models/face-snap.model';

@Component({
  selector: 'app-snapface',
  templateUrl: './snapface.component.html',
  styleUrls: ['./snapface.component.scss']
})
export class SnapfaceComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapped:boolean = false;

  ngOnInit(){
  }

  onAddSnap()
  {
    this.faceSnap.snaps = this.snapped ? this.faceSnap.snaps - 1 : this.faceSnap.snaps + 1;
    this.snapped = !this.snapped;
  }
}
