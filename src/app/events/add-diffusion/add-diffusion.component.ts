import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiffusionsService } from 'src/app/diffusions.service';

@Component({
  selector: 'app-add-diffusion',
  templateUrl: './add-diffusion.component.html',
  styleUrls: ['./add-diffusion.component.css']
})
export class AddDiffusionComponent implements OnInit {


  id: number = 0;
  form: FormGroup;
  event: any;

  successMessage: string = '';
  errorMessage: string = '';
  constructor(private api: DiffusionsService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
    this.form = this.fb.group({
      titre: new FormControl('', Validators.required),
      dateDiffusion: new FormControl('', Validators.required),
      heureDebut: new FormControl('', Validators.required),
      heureFin: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {

  }


  saveData() {
    console.log(this.form.value);
    let body = {
      event:this.route.snapshot.params.id,
      titre: this.form.value.titre,
      dateDiffusion: this.form.value.dateDiffusion,
      heureDebut: this.form.value.heureDebut,
      heureFin: this.form.value.heureFin
    }
    console.log(body);

    this.api.addDiff(body).toPromise().then((res: any) => {
      if (res.success === true) {
        this.successMessage = res.message;
      } else {
        this.errorMessage = res.message;
      }
    })

  }


}
