import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(num1: any, num2: any, cal: any) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (cal) {
      case "+":
        this.result = num1 + num2
        break;
      case "-":
        this.result = num1 - num2
        break;
      case "*":
        this.result = num1 * num2
        break;
      case "/":
        this.result = num1 / num2
        break;
    }
  }
}
