import {Component, OnInit} from '@angular/core';
import {ICategory} from "../../interface/ICategory.modele";
import {INft} from "../../interface/INft.modele";
import {ActivatedRoute} from "@angular/router";
import {NftService} from "../../service/nft.service";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: ICategory | undefined;
  nfts: INft[] = []

  constructor(private route: ActivatedRoute, private CategoryService: CategoryService, private nft: NftService) { }

  ngOnInit() {
    this.getCategoryDetails();
    this.displayAllNfts();
  }

  getCategoryDetails() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.CategoryService.getCategory(id).subscribe(
        (nft: any) => {
          this.category = nft;
        }
      );
    }
  }
  getBorderClass(index: number): string {
    const classes = ['border1', 'border2', 'border3'];
    return classes[index % classes.length];
  }
  displayAllNfts() {
    this.nft.getAllNfts().subscribe(
      (data) => {
        this.nfts = data['hydra:member'];
      }
    );
  }
}
