import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { 
  }
  createDate = new Date();
  title = 'Beñaten Blog';
  
  posts = [
    {
      title: 'Premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ',
      loveIts: 1,
      createdAt: this.createDate
    },
    {
      title: 'Deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt eros. Suspendisse potenti.',
      loveIts: 1,
      createdAt: this.createDate
    },
    {
      title: 'Troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt eros. Suspendisse potenti. Nulla scelerisque malesuada mauris eu consequat.',
      loveIts: -1,
      createdAt: this.createDate
    }
  ];
}