import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service'


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor( private product: ProductServiceService) { }

  ngOnInit() {
  }

  getCategories(): void {
    this.product.getProducts().subscribe(data => {
      console.log(data);
    });
  }
}
