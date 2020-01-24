import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-my-web-component',
  templateUrl: './my-web-component.component.html',
  styleUrls: ['./my-web-component.component.scss']
})
export class MyWebComponent implements OnInit {

  public posts = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((restApiOutput: any) => {
      this.posts = restApiOutput;
    });
  }
}
