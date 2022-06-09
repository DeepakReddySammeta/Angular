import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SharedService } from './home/sharedservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  message: JSON;
  constructor(private shared: SharedService) {}
  ngOnInit(): void {
    this.message = this.shared.getMessage();
  }
}
