import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'This loaded dynamically'
  
  data: any[] = new Array(3);

}
