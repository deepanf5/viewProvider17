import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ChildComponent } from '../child/child.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,ContentComponent],
  template: `
    <p>
      parent works!
    </p>
    <p> Parent Data : {{dataService.getData()}}</p>
    <app-child>
    <app-content></app-content>
    </app-child>
  `,
  styleUrl: './parent.component.css',
  viewProviders:[{
    provide:DataService,useValue:{ getData:() => "parent provider Data"}
  }]
})
export class ParentComponent {
  constructor(public dataService:DataService){}

}
