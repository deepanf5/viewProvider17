import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  template: `
    <p>
      content works!
    </p>
    <p>Content Data : {{dataService.getData()}}</p>
  `,
  styleUrl: './content.component.css'
})
export class ContentComponent{

  constructor(public dataService:DataService) {}




}
