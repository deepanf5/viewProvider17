import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ContentComponent],
  template: `
    <p>
      child works!
    </p>
    <p>child Data : {{dataService.getData()}}</p>
    <app-content></app-content>
  `,
  styleUrl: './child.component.css'
})
export class ChildComponent {

  constructor(public dataService:DataService){}

}
