import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import {HttpClientModule} from "@angular/common/http";
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { AddNftComponent } from './nft/add-nft/add-nft.component';
import { ListNftComponent } from './nft/list-nft/list-nft.component';
import { NftDetailsComponent } from './nft/nft-details/nft-details.component';
import {NgOptimizedImage} from "@angular/common";
import {CategoryService} from "./service/category.service";
import {NftService} from "./service/nft.service";
import {UserService} from "./service/user.service";
import {ToastrModule} from "ngx-toastr";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from "./login/login.component";
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './collection/category/category.component';
import { CollectionComponent } from './collection/collection/collection.component';
import { NavCategoryComponent } from './collection/nav-category/nav-category.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    CategoryDetailsComponent,
    AddUserComponent,
    ListUserComponent,
    UserDetailsComponent,
    AddNftComponent,
    ListNftComponent,
    NftDetailsComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    CollectionComponent,
    NavCategoryComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    NgbModule,
    FormsModule,
  ],
  providers: [
    NftService,
    CategoryService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
