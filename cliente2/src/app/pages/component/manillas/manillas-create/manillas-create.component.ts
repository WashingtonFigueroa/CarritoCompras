import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../../../environments/environment.prod';
import {ManillasService} from '../manillas.service';

@Component({
  selector: 'app-manillas-create',
  templateUrl: './manillas-create.component.html',
  styleUrls: ['./manillas-create.component.css']
})
export class ManillasCreateComponent implements OnInit {
    @ViewChild('imagen') imagen;
    manillaGroup: FormGroup;
    constructor(protected fb: FormBuilder,
                protected manillaService: ManillasService,
                protected router: Router,
                protected toastr: ToastrService ) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.manillaGroup = this.fb.group({
            'tipo' : new FormControl('', [ Validators.required]),
            'imagen' : new FormControl('')
        });
    }

    store() {
        const form =  new FormData();
        const file = this.imagen.nativeElement;
        if (file.files[0]) {
            form.append('imagen', file.files[0]);
            form.append('tipo', this.manillaGroup.value.nombre);
        } else {
            console.log('ingrese imagen');
        }
        this.manillaService.store(form).subscribe((res: any) => {
            console.log('Producto Guardado');
            this.toastr.success(res.message, res.title, {
                timeOut: 1000
            });
            this.router.navigate([environment.admin + '/manillas']);
        }, (error: any) => {
            this.toastr.error(error.message, error.title);
        });
    }
}
