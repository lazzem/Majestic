import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiffusionsService } from 'src/app/diffusions.service';
import { EventsService } from 'src/app/events.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  id: number=0;
  event: any;
  data:any;

  constructor(private api: EventsService,
    private apiDiff:DiffusionsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    
      this.api.getEvent(this.id).subscribe(
        result => {
          this.event=result;
        //this.form.patchValue(result);
        },
        error => {
          'Event loading Failed !';
        }
      );

      console.log(this.event);

      
      this.getInvoice();
  }

  
  private getInvoice() {
    this.route.params.subscribe(params => {
      if(params['id']) {
        console.log("ID: ", params['id'])
        this.id = params['id'];
        this.api.getEvent(this.id).subscribe(
          data => {
            console.log(data)
            this.event = data;
            
          },
          error => {
            error: 'Failed to get event';
          }
        )
      }
    })
  }

  list() {
    this.router.navigate(['events/list']);
  }

  deleteDiff(id:number){
    this.apiDiff.deleteDiff(id)
    .subscribe(
      data => {
        console.log(data);
        this.getInvoice();
      },
      error => console.log(error));
  }
}
