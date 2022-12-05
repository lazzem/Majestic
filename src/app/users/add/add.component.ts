import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  id: number = 0;
  form: FormGroup;
  user: any;

  successMessage: string = '';
  errorMessage: string = '';
  constructor(private api: UsersService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
    this.form = this.fb.group({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', Validators.required),
      pays: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    this.route.params.subscribe(params => {

      if (params['id']) {
        console.log("ID: ", params['id'])
        this.id = params['id'];
        this.api.getUser(this.id).subscribe(
          data => {
            console.log(data)
            this.user = data;
            this.form.patchValue({
              nom: this.user.nom,
              prenom: this.user.prenom,

              email: this.user.email,
              telephone: this.user.telephone,
              pays: this.user.pays,
            });

          },
          error => {
            error: 'Failed to get user';
          }
        )
      }
    })
  }

  saveData() {
    console.log(this.form.value);
    let body = {
      nom: this.form.value.nom,
      prenom: this.form.value.prenom,
      email: this.form.value.email,
      telephone: this.form.value.telephone,
      pays: this.form.value.pays
    }
    console.log(body);
    if (!this.id) {
      this.api.addUser(body).toPromise().then((res: any) => {
        if (res.success === true) {
          // 

          this.successMessage = res.message;
        } else {
          this.errorMessage = res.message;
        }
      })

    } else {
      this.api.updateUser(this.id, body).subscribe(
        data => {
          this.form.reset();
          this.router.navigate(['users/list']);
        },
        error => console.log(error));
      console.log(body);
    }
  }

}