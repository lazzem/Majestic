import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usersList:any[]=[];
  constructor(private userService: UsersService, private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
    console.log(this.usersList);
  }

  reloadData(){
    
    this.userService.getUsersList().toPromise().then((usersList:any[])=>{
      console.log(usersList);
      this.usersList=usersList;
    } ).catch( 
      (error)=>{
      }
    ).finally(()=>{
    })
    console.log(this.usersList)
  }

  deleteUser(id:number){
    this.userService.deleteUser(id)
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
