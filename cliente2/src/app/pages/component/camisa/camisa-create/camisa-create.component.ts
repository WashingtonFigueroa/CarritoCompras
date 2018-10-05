import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../../../environments/environment.prod';
import {CamisaService} from '../camisa.service';

@Component({
  selector: 'app-camisa-create',
  templateUrl: './camisa-create.component.html',
  styleUrls: ['./camisa-create.component.css']
})
export class CamisaCreateComponent implements OnInit {
    @ViewChild('imagen') imagen;
    camisaGroup: FormGroup;
    constructor(protected fb: FormBuilder,
                protected camisaService: CamisaService,
                protected router: Router,
                protected toastr: ToastrService ) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.camisaGroup = this.fb.group({
            'detalle' : new FormControl('', [ Validators.required]),
            'imagen' : new FormControl('')
        });
    }

    store() {
        const form =  new FormData();
        const file = this.imagen.nativeElement;
        if (file.files[0]) {
            form.append('imagen', file.files[0]);
            form.append('detalle', this.camisaGroup.value.detalle);
        } else {
            console.log('ingrese imagen');
        }
        this.camisaService.store(form).subscribe((res: any) => {
            console.log('Tela Guardada');
            this.toastr.success(res.message, res.title, {
                timeOut: 1000
            });
            this.router.navigate([environment.admin + '/camisas']);
        }, (error: any) => {
            this.toastr.error(error.message, error.title);
        });
    }
}
