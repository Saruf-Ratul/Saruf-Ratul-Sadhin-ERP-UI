import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgZorroAntdModule } from './ng-zorro-antd/ng-zorro-antd.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgZorroAntdModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Auth-UI';


}
