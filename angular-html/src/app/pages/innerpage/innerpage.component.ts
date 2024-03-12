import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-innerpage',
  templateUrl: './innerpage.component.html',
  styleUrls: ['./innerpage.component.scss'],
})
export class InnerpageComponent {
  ngOnInit() {
    Aos.init({
      duration: 600,
      easing: 'ease-in-sine',
      once: true,
    });
  }
}
