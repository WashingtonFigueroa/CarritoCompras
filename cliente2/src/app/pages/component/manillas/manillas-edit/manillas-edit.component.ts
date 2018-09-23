import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ManillasService} from '../manillas.service';

@Component({
  selector: 'app-manillas-edit',
  templateUrl: './manillas-edit.component.html',
  styleUrls: ['./manillas-edit.component.css']
})
export class ManillasEditComponent implements OnInit {
    @ViewChild('imagen') imagen;
    manilla_id: number = null;
    manilla: any = null;
    manillaGroup: FormGroup;

    constructor(protected manillaService: ManillasService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router,
                protected toastr: ToastrService) {
        this.route.params.subscribe(param => {
            this.manilla_id = param.id;
            this.manillaService.show(param.id).subscribe(res => {
                    this.manilla = res;
                    this.createForm(res);
                });
        });
    }

    ngOnInit() {
    }

    createForm(manilla) {
        this.manillaGroup = this.fb.group({
            'tipo' : new FormControl(manilla.tipo, [Validators.required]),
            'imagen' : new FormControl('')
        });
    }

    update() {
        const form = new FormData();
        const  file = this.imagen.nativeElement;
        if (file.files[0]) {
            form.append('imagen', file.files[0]);
            form.append('tipo', this.manillaGroup.value.tipo);
            this.manillaService.update(form, this.manilla_id)
                .subscribe(res => {
                    this.toastr.success('Manilla actualizada', 'Exito');
                    this.router.navigate(['/admin/manillas/listar']);
                    location.reload();
                });
        }else {
            this.toastr.info('Seleccione la Imagen');
        }

    }
}
