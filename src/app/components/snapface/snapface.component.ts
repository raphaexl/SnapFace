import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snapface',
  templateUrl: './snapface.component.html',
  styleUrls: ['./snapface.component.scss']
})
export class SnapfaceComponent implements OnInit {
  title!:string;
  description!:string;
  createdDate!:Date;
  snaps!:number;
  imageUrl!:string;
  snapped:boolean = false;



  ngOnInit(){
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit!';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }

  onAddSnap()
  {
    this.snaps = this.snapped ? this.snaps - 1 : this.snaps + 1;
    this.snapped = !this.snapped;
  }
}
