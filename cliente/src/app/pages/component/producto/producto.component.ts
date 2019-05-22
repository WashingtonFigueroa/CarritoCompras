import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  environment = environment;
  constructor() { }

  ngOnInit() {
  }

}
