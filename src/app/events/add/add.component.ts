import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/events.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  id: number = 0;
  form: FormGroup;
  event: any;

  successMessage: string = '';
  errorMessage: string = '';
  constructor(private api: EventsService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
    this.form = this.fb.group({
      nom: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getEvent();
  }

  private getEvent() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        console.log("ID: ", params['id'])
        this.id = params['id'];
        this.api.getEvent(this.id).subscribe(
          data => {
            console.log(data)
            this.event = data;
            this.form.patchValue({
              nom: this.event.nom,
              prenom: this.event.type,
              email: this.event.description,
            });

          },
          error => {
            error: 'Failed to get event';
          }
        )
      }
    })
  }

  saveData() {
    console.log(this.form.value);
    let body = {
      nom: this.form.value.nom,
      type: this.form.value.type,
      description: this.form.value.description
    }
    console.log(body);
    if (!this.id) {
      this.api.addEvent(body).toPromise().then((res: any) => {
        if (res.success === true) {
          this.successMessage = res.message;
        } else {
          this.errorMessage = res.message;
        }
      })

    } else {
      this.api.updateEvent(this.id, body).subscribe(
        data => {
          this.form.reset();
          this.router.navigate(['events/list']);
        },
        error => console.log(error));
      console.log(body);
    }
  }


}
