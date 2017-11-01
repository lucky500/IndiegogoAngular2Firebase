import { Component } from '@angular/core';
// import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myData: Array<any>;
  title = "hello";
  //constructor(private http: Http){
  //   this.get.http('https://jsonplaceholder.typicode.com/photos')
  //     .map(response => response.json())
  //     .subscribe(res => this.myData = res);
  //}
}
