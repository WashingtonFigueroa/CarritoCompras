import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.css']
})
export class ImageZoomComponent implements OnInit {

  @Input() settings: any;

  constructor() { }

  ngOnInit() {
  }

}
