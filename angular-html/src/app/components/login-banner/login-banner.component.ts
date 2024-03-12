import { OnInit, Component } from '@angular/core';
import initAnimation from './login-banner.js';

@Component({
  selector: 'app-login-banner',
  templateUrl: './login-banner.component.html',
  styleUrls: ['./login-banner.component.scss'],
})
export class LoginBannerComponent {
  ngOnInit(): void {
    initAnimation();
  }
}
