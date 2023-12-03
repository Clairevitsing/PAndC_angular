import {Component, OnInit} from '@angular/core';
import {ICategory} from "../../interface/ICategory.modele";
import {INft} from "../../interface/INft.modele";
import {ActivatedRoute} from "@angular/router";
import {NftService} from "../../service/nft.service";
import {CategoryService} from 'src/app/service/category.service';


@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit{
  nftCategory: ICategory | undefined;
  nfts: INft[] = []

  constructor(private route: ActivatedRoute,private CategoryService: CategoryService,private nft: NftService){}

  ngOnInit() {
    this.getCategoryDetails();
    this.displayAllNfts();
  }

  getCategoryDetails() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.CategoryService.getCategory(id).subscribe(
        (nft:any) => {
          this.nftCategory = nft;
        }
      );
    }
  }

  displayAllNfts(){
    this.nft.getAllNfts().subscribe(
      (data) => {
        this.nfts = data['hydra:member'];
      }
    );
  }

}
