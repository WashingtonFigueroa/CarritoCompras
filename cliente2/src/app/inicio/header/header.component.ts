import { Component, OnInit } from '@angular/core';
import {InicioService} from '../inicio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categorias: any = null;
  constructor(private inicioService: InicioService) {
  }

  ngOnInit() {
    this.inicioService.categorias()
      .subscribe(res => {
        console.log(res);
        this.categorias = res;
      });

  }

}
