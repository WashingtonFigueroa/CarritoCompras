import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductoService} from '../producto.service';
import {CategoriasService} from '../../categorias/categorias.service';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css']
})
export class ProductoCreateComponent implements OnInit {

    categorias: any = null;
    productoGroup: FormGroup;

    constructor(protected productoService: ProductoService,
                protected categoriaService: CategoriasService,
                protected fb: FormBuilder,
                protected router: Router,
                //            protected toartr: ToastrService
    ) {
        this.categoriaService.lista_categorias().subscribe(res => this.categorias = res);
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.productoGroup = this.fb.group({
            'categoria_id' : new FormControl(0, [Validators.required]),
            'stock' : new FormControl('', [Validators.required]),
            'material' : new FormControl('', [Validators.required]),
            'color' : new FormControl('', [Validators.required]),
            'largo' : new FormControl('', [Validators.required]),
            'ancho' : new FormControl('', [Validators.required]),
            'alto' : new FormControl('', [Validators.required]),
            'puntos' : new FormControl('', [Validators.required])
        });
    }

    store() {
      this.productoService.store(this.productoGroup.value)
          .subscribe((res: any) => {
              if (res.error) {
                  console.log(res.error);
              } else {
                  this.router.navigate(['/productos']);
                  // this.toartr.success('Usuario Guardado', 'Ok');
              }
          }, error => {
              // this.toartr.error('Usuaurio Registrado', 'Error Usuario');
          });
    }

}
