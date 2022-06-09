import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var db: any;

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  private storageName = 'CodeToDo';
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
    console.log(db);
    // this.getAllProjects;
  }

  getAllProjects() {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = db
          .transaction([this.storageName], 'readwrite')
          .objectStore(this.storageName)
          .getAll();
        console.log(request);
        request.onsuccess = await function (event) {
          if (event.target.result) {
            resolve(event.target.result);
          } else {
            resolve(false);
          }
        };
      }
    });
  }
}
