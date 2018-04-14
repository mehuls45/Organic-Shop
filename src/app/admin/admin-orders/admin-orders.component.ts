import { AuthService } from './../../auth.service';
import { Router } from '@angular/router';
import { OrderService } from './../../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent{
  orders$;
  myorder$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService) {

    this.orders$ = orderService.getOrders();
    this.myorder$ = authService.user$.switchMap(u => orderService.getOrdersByuser(u.uid));

   }
}
