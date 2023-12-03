import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent} from "./category/add-category/add-category.component";
import {ListCategoryComponent} from "./category/list-category/list-category.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {ListNftComponent} from "./nft/list-nft/list-nft.component";
import {AddNftComponent} from "./nft/add-nft/add-nft.component";
import {NftDetailsComponent} from "./nft/nft-details/nft-details.component";
import {CategoryDetailsComponent} from "./category/category-details/category-details.component";

const routes: Routes = [
  {path:'nfts/create', component:AddNftComponent},
  {path:'nfts', component:ListNftComponent},
  {path:'nfts/:id', component:NftDetailsComponent},
  {path:'categories/create', component:AddCategoryComponent},
  {path:'categories', component:ListCategoryComponent},
  {path:'categories/:id', component:CategoryDetailsComponent},
  {path:'users/create', component:AddUserComponent},
  {path:'users', component:ListUserComponent},
  {path:'users/:id', component:UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
