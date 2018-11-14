import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BoletinService} from '../boletin.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-boletin-create',
  templateUrl: './boletin-create.component.html',
  styleUrls: ['./boletin-create.component.css']
})
export class BoletinCreateComponent implements OnInit {

  boletinGroup: FormGroup;
  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private boletinService: BoletinService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.boletinGroup = this.fb.group({
      'asunto' : new FormControl('', [Validators.required]),
      'mensaje' : new FormControl('', [Validators.required])
    });
  }

  enviarBoletines() {
    this.boletinService
        .enviarBoletines(this.boletinGroup.value)
        .subscribe((res: any) => {
            this.boletinGroup.reset();
            this.toastr.success(res.mensaje, 'Exito');
        });
  }
}
