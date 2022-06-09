import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  signinForm: FormGroup;
  ngOnInit() {
    localStorage.setItem('name', 'Deepak');
    localStorage.setItem('password', 'Deepak@123');
    this.signinForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(9),
      ]),
    });

    // console.log();
  }

  onsubmit() {
    console.log(this.signinForm);
    if (
      this.signinForm.value.username == localStorage.getItem('name') &&
      this.signinForm.value.password == localStorage.getItem('password')
    ) {
      this.router.navigate(['/home']);
    } else {
      alert('Username or Password are incorrect Please try Again ..!');
    }
  }
}
