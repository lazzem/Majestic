import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number=0;
  client: any;
  data:any;

  constructor(private api: UsersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    
      this.api.getUser(this.id).subscribe(
        result => {
          this.client=result;
        //this.form.patchValue(result);
        },
        error => {
          'User loading Failed !';
        }
      );

      console.log(this.client);

      
      this.getInvoice();
  }

  
  private getInvoice() {
    this.route.params.subscribe(params => {
      if(params['id']) {
        console.log("ID: ", params['id'])
        this.id = params['id'];
        this.api.getUser(this.id).subscribe(
          data => {
            console.log(data)
            this.client = data;
            
          },
          error => {
            error: 'Failed to get user';
          }
        )
      }
    })
  }

  list() {
    this.router.navigate(['users/list']);
  }
}
