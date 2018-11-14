import { Component, OnInit } from '@angular/core';
import {BoletinService} from '../../pages/component/boletin/boletin.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  boletinGroup: FormGroup;

  constructor(private boletinService: BoletinService,
              private toastr: ToastrService,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.boletinGroup = this.fb.group({
      'email' : new FormControl('', Validators.required)
    });
  }
  store() {
    this.boletinService.store(this.boletinGroup.value)
      .subscribe((res: any) => {
        if (res.estado === 'exito') {
          this.boletinGroup.reset();
          this.toastr.success(res.mensaje, 'Exito');
        } else {
          this.toastr.error(res.mensaje, 'Error');
        }
      });
  }
}
