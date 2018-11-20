import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ComprasService} from '../../compras/compras.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-compras-edit',
  templateUrl: './compras-edit.component.html',
  styleUrls: ['./compras-edit.component.css']
})
export class ComprasEditComponent implements OnInit {

  compra_id: number = null;
  compra: any = null;
  compraGroup: FormGroup;

  constructor(protected comprasService: ComprasService,
              protected fb: FormBuilder,
              protected route: ActivatedRoute,
              protected router: Router,
              protected toastr: ToastrService
  ) {
    this.route.params.subscribe(param => {
      this.compra_id = param.id;
      this.comprasService.show(param.id)
        .subscribe(res => {
          this.compra = res;
          this.createForm(res);
        });
    });
  }

  ngOnInit() {
  }

  createForm(compra) {
    this.compraGroup = this.fb.group({
      'numero_guia' : new FormControl(compra.numero_guia, [Validators.required]),
    });
  }

  update() {
    const form = new FormData();
/*    if (file.files[0]) {
      form.append('imagen', file.files[0]);
      form.append('nombre', this.compraGroup.value.nombre);
      form.append('descripcion', this.compraGroup.value.descripcion);
      this.comprasService.update(form, this.compra_id)
        .subscribe(res => {
          this.toastr.success('Categoria actualizada', 'Exito');
          this.router.navigate(['/admin/compras/listar']);
          location.reload();
        });
    }else {
      this.toastr.info('Seleccione la Imagen');
    }*/
  }
}
