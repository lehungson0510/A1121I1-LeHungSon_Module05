import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'casestudy';

  back() {
    const scroollBtn = document.querySelector('.back-to-top');
    console.log(scroollBtn);
    scroollBtn.addEventListener('click', () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
}
