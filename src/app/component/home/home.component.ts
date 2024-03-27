import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NgZorroAntdModule } from '../../ng-zorro-antd/ng-zorro-antd.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppComponent,NgZorroAntdModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  selectedConcern: string = '0';
  selectedBranch: string = '0';
  selectedUserRoll: string = '0';

  captureValues() {
    console.log('Selected Concern:', this.selectedConcern);
    console.log('Selected Branch:', this.selectedBranch);
    console.log('Selected User Roll:', this.selectedUserRoll);

    this.router.navigate(['/signin']);
  }
}
