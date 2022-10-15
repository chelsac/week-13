import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
 httpData;
  constructor(public userServiceObj:UsersService) { }

  ngOnInit(): void {
    this.userServiceObj.getUsers()
    .subscribe((users) =>{
      this.httpData=users;
      console.log( this.httpData);})
  }

}
