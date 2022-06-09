import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  message: JSON;
  constructor() {}
  setMessage(data) {
    this.message = data;
  }
  getMessage() {
    return this.message;
  }
}
