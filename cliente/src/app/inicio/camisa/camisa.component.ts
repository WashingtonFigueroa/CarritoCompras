import {Component, OnInit, ViewChild} from '@angular/core';
import {CamisaService} from "../../pages/component/camisa/camisa.service";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-camisa',
  templateUrl: './camisa.component.html',
  styleUrls: ['./camisa.component.css']
})
export class CamisaComponent implements OnInit {

  @ViewChild('camisa1') camisa1;
  @ViewChild('camisa2') camisa2;
  @ViewChild('camisa3') camisa3;
  @ViewChild('camisa4') camisa4;
  @ViewChild('camisaBg') camisaBg;
  @ViewChild('expandedImg') expandedImg;

  camisas: any = [];
    environment = environment;
  constructor(protected camisaService: CamisaService) { }

  ngOnInit() {
      this.camisaBg.nativeElement.style.backgroundImage = "url('assets/images/plantilla/t1.jpg')";
      this.expandedImg.nativeElement.src = this.camisa1.nativeElement.src;
      this.camisaService.index().subscribe((res: any) => {
          this.camisas = res.data;
      });
  }

  openImg(camisa) {
    switch (camisa) {
      case 'camisa1' :
        this.expandedImg.nativeElement.src = this.camisa1.nativeElement.src;break;
      case 'camisa2' :
        this.expandedImg.nativeElement.src = this.camisa2.nativeElement.src; break;
      case 'camisa3' :
        this.expandedImg.nativeElement.src = this.camisa3.nativeElement.src; break;
      case 'camisa4' :
        this.expandedImg.nativeElement.src = this.camisa4.nativeElement.src; break;
    }
    this.expandedImg.nativeElement.parentElement.style.display = 'block';
  }

  setBackground(event) {
    console.log(event);
    this.camisaBg.nativeElement.style.backgroundImage = "url('" + event.srcElement.src + "')";
    this.camisaBg.nativeElement.style.backgroundSize = 'cover';
  }



}
