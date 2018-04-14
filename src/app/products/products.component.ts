import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from './../shopping-cart.service';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from './../product';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from '../shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>; 

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
    }

    private populateProducts() {
      this.productService
        .getAll()
        .switchMap(products => {
          this.products = products;
          return this.route.queryParamMap;
        })
          .subscribe(params => {
            this.category = params.get('category');
            this.applyFilter();
          });
    }

    private applyFilter() {
      this.filteredProducts = (this.category) ? 
      this.products.filter(p => p.category === this.category) : 
      this.products; 
    }
  }
