import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-container-video-card',
  templateUrl: './container-video-card.component.html',
  styleUrls: ['./container-video-card.component.scss']
})
export class ContainerVideoCardComponent implements OnInit {

  @Input() arrayItems: any[] = [];
  @Output() imageUrl = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      if (this.arrayItems) {
        this.imageUrl.emit(this.arrayItems[0].poster_path);
      }
    }, .10);
  }

  onMouseOver(item: any){
    this.imageUrl.emit(item);
  }

}
