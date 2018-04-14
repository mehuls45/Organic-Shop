import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  orderId: string;

  constructor() { 
    this.orderId = localStorage.getItem('cartId');
  }

  ngOnInit() {
  }

}
