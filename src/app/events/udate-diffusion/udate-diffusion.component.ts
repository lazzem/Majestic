import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiffusionsService } from 'src/app/diffusions.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-udate-diffusion',
  templateUrl: './udate-diffusion.component.html',
  styleUrls: ['./udate-diffusion.component.css']
})
export class UdateDiffusionComponent implements OnInit {

  id: number = 0;
  form: FormGroup;
  diffusion: any;

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private api: DiffusionsService,
    private location: Location,
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
    this.getDiffusion()
  }

  private getDiffusion() {
    this.route.params.subscribe(params => {

      if (params['id']) {
        console.log("ID: ", params['id'])
        this.id = params['id'];
        this.api.getDiff(this.id).subscribe(
          data => {
            console.log(data)
            this.diffusion = data;
            this.form.patchValue({
              titre: this.diffusion.titre,
              dateDiffusion: this.diffusion.dateDiffusion,
              heureDebut: this.diffusion.heureDebut,
              heureFin: this.diffusion.heureFin,
             
            });

          },
          error => {
            error: 'Failed to get diffusion';
          }
        )
      }
    })

    
  }
  
  saveData() {
    console.log(this.form.value);
    let body = {
      titre: this.form.value.titre,
      dateDiffusion: this.form.value.dateDiffusion,
      heureDebut: this.form.value.heureDebut,
      heureFin: this.form.value.heureFin
    }
    console.log(body);
    
      this.api.updateDiff(this.id, body).subscribe(
        data => {
          this.form.reset();
          this.location.back();
        },
        error => console.log(error));
      console.log(body);
      
  }
}
