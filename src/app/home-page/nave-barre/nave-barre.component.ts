import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nave-barre',
  templateUrl: './nave-barre.component.html',
  styleUrls: ['./nave-barre.component.css']
})
export class NaveBarreComponent {
  constructor(private router: Router) { }

  navigateToAbout() {
    this.router.navigate(['/restaurants']);
  }

}
