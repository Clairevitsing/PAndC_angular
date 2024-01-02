import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {ListNftComponent} from "./nft/list-nft/list-nft.component";
import {AddNftComponent} from "./nft/add-nft/add-nft.component";
import {NftDetailsComponent} from "./nft/nft-details/nft-details.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./header/header.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path:'nfts/create', component:AddNftComponent},
  {path:'nfts', component:ListNftComponent},
  {path:'nfts/:id', component:NftDetailsComponent},
  {path:'users/create', component:AddUserComponent},
  {path:'users', component:ListUserComponent},
  {path:'users/:id', component:UserDetailsComponent},
  {path:'categories', component:UserDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
