import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { SharedService } from '../home/sharedservice.service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  userData: any;
  constructor(
    private shared: SharedService,
    private dataservice: UserserviceService
  ) {}
  message: JSON;
  ngOnInit(): void {
    this.message = this.shared.getMessage();
    this.dataservice.getUsers().subscribe((data) => {
      this.userData = data;
      console.log(data);
    });
  }
}
