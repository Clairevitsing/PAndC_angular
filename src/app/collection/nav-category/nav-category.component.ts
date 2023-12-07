import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {INft} from "../../interface/INft.modele";
import {ICategory} from "../../interface/ICategory.modele";

@Component({
  selector: 'app-nav-category',
  templateUrl: './nav-category.component.html',
  styleUrls: ['./nav-category.component.css']
})
export class NavCategoryComponent implements OnInit {

  category: ICategory | undefined;
  categories: ICategory[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe((categories: ICategory[]) => {
      this.categories =  categories;
      console.log(this.categories);
    });
  }

}
