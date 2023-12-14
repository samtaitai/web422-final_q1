import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  cities: string[] = [
    'Toronto',
    'Ajax',
    'Whitby',
    'Markham',
    'Ottawa',
    'Richmond',
    'Brampton',
    'Oshawa',
  ];
}
