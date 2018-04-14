import { AppUser } from './../app-user';
import { AuthService } from './../auth.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from './../shopping-cart';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }

    logout() {
      this.auth.logout();
    }
}
