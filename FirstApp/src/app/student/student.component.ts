import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  httpData;
  constructor(public userServiceObj:UsersService) { }

  ngOnInit(): void {
    this.userServiceObj.getUsers()
    .subscribe((users) =>{
      this.httpData=users;
      console.log( this.httpData);})
  }

}
