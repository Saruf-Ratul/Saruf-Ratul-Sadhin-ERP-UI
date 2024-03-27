import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgZorroAntdModule } from '../../ng-zorro-antd/ng-zorro-antd.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet,NgZorroAntdModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  constructor(private router: Router) {}

  webA() {
    window.open('https://navana.com/', '_blank');
  }

  webB() {
    this.router.navigate(['/home']);
  }

}
