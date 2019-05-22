import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PromocionService} from '../../promocion/promocion.service';
import { InventarioService} from '../../inventario/inventario.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-promocion-edit',
  templateUrl: './promocion-edit.component.html',
  styleUrls: ['./promocion-edit.component.css']
})
export class PromocionEditComponent implements OnInit {
    @ViewChild ('imagen') imagen;
    inventarios: any = null;
    promocion_id: number = null;
    promocion: any = null;
    promocionGroup: FormGroup;

    constructor(protected promocionService: PromocionService,
                protected inventarioService: InventarioService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router,
                protected toastr: ToastrService) {
        this.inventarioService.lista_inventarios().subscribe(res => this.inventarios = res);
        this.route.params.subscribe(param => {
            this.promocion_id = param.id;
            this.promocionService.show(param.id).subscribe(res => {
                this.promocion = res;
                this.createForm(res);
            });
        });
    }

    ngOnInit() {
    }

    createForm(promocion) {
        this.promocionGroup = this.fb.group({
            'inventario_id' : new FormControl(promocion.inventario_id, [Validators.required]),
            'detalle': new FormControl(promocion.detalle, [Validators.required]),
            'puntos' : new FormControl(promocion.puntos),
            'stock' : new FormControl(promocion.stock),
            'imagen': new FormControl(''),
            'estado': new FormControl(promocion.estado),
        });
    }

    update() {
        const form =  new FormData();
        const file = this.imagen.nativeElement;
        if (file.files[0]) {
            form.append('imagen', file.files[0]);
            form.append('inventario_id', this.promocionGroup.value.inventario_id);
            form.append('detalle', this.promocionGroup.value.detalle);
            form.append('puntos', this.promocionGroup.value.puntos);
            form.append('stock', this.promocionGroup.value.stock);
            form.append('estado', this.promocionGroup.value.estado);
            this.promocionService.update(form, this.promocion_id)
                .subscribe(res => {
                    this.toastr.success('Promoción actualizada', 'Exito');
                    this.router.navigate(['/admin/promociones/listar']);
                });
        }else {
            this.toastr.info('Seleccione una Imagen');
        }
    }
}
