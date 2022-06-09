import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { SharedService } from './sharedservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userData: any;
  userDetails: any;
  message: JSON;
  constructor(
    private userservice: UserserviceService,
    private shared: SharedService,
    private router: Router
  ) {}
  public ngOnInit() {
    this.userservice.getUsers().subscribe((data) => {
      this.userData = data;
      console.log(this.userData);
      console.log(this.userservice.getAllProjects());
    });
  }
  userSel(i) {
    this.router.navigate(['user-info']);
    this.shared.setMessage(i);
    console.log(i);
  }
  deleteItem(i) {
    this.userData.splice(i, 1);
    console.log('i', i);
  }
  //   editUser() {
  //      this.userData.forEach((value) => {
  //       value++;
  //      return this.userData; }

  //     );
  // }
}
