import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tested_app';

  ngOnInit() {
    console.log('Hello, tested_app');
  }


  sum(a: number, b: number) {
    return a + b;
  }

  sub(a: number, b: number) {
    return a - b;
  }
}