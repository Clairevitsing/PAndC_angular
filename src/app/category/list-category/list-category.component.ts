// Import necessary Angular modules and dependencies
import { Component, OnInit } from '@angular/core';
import { CategoryService } from "src/app/service/category.service";
import { ICategory } from "src/app/interface/ICategory.modele";

@Component({
  // Component metadata, specifying selector, template, and style URLs
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  // Component property to hold NFT category data
  NftCategory: ICategory[] = [];

  // Constructor to inject CategoryService dependency
  constructor(private category: CategoryService) {}

  // Lifecycle hook, called after component initialization
  ngOnInit() {
    // Call the displayAllCategory method to fetch and display categories
    this.displayAllCategory();
  }

  // Method to fetch and display all NFT categories
  displayAllCategory() {
    // Subscribe to the observable returned by getAllCategory method
    this.category.getAllCategory().subscribe(
      // Callback function with data received from the observable
      (data) => {
        // Assign the received category data to the NftCategory property
        this.NftCategory = data['hydra:member'];
      }
    );
  }
}
