import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'HTTP_project';
  products : any;
  constructor(private service: ProductsService) {}
  ngOnInit(): void {
    this.service.getProducts().subscribe((x)=>{this.products = x;});
  }
}
