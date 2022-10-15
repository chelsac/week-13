import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'First App';
  isAvailable =true;
  name="your name";
  months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  clicked(){
    alert("hi how u doing?");
  };
  value="";
  keys(event){
    this.value=event.target.value;
    console.log(this.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
