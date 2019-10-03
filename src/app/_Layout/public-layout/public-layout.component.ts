import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.css']
})
export class PublicLayoutComponent {
  title = 'Global Green';
  constructor(private router: Router) {}

   GoToMainPage()
   {
        this.router.navigate(['/main']);
   }
}
