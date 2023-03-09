import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  status: boolean = false;
  status2:boolean = false;
clickEvent(){
    this.status = !this.status;       
}

clickEventSeccond(){
  this.status2 = !this.status2;
}
}
