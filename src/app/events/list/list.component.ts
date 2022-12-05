import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/events.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  eventList:any[]=[];
  constructor(private userService: EventsService, private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
    console.log(this.eventList);
  }

  reloadData(){
    
    this.userService.getEventsList().toPromise().then((eventList:any[])=>{
      console.log(eventList);
      this.eventList=eventList;
    } ).catch( 
      (error)=>{
      }
    ).finally(()=>{
    })
    console.log(this.eventList)
  }

  deleteEvents(id:number){
    this.userService.deleteEvent(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  userDetails(id:number){
    this.router.navigate(['details',id])
  }

  updateUser(id:number){
    this.router.navigate(['update',id])
  }


}
