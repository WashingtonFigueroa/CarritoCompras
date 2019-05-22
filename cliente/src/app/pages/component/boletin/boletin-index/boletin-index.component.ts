import { Component, OnInit } from '@angular/core';
import {BoletinService} from '../boletin.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-boletin-index',
  templateUrl: './boletin-index.component.html',
  styleUrls: ['./boletin-index.component.css']
})
export class BoletinIndexComponent implements OnInit {

  boletines: any = null;
  boletinGroup: FormGroup;
  constructor(private boletinService: BoletinService,
              private fb: FormBuilder) {
    this.boletinService.index()
      .subscribe((res: any) => {
        this.boletines = res;
      });
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.boletinGroup = this.fb.group({
      'search' : new FormControl('', [Validators.required])
    });
  }

  destroy(boletin_id, index) {
    if (window.confirm('¿Esta seguro que desea eliminar este correo?')) {
      this.boletinService.destroy(boletin_id)
        .subscribe((res: any) => {
          this.boletines.splice(index, 1);
        });
    }
  }
}
