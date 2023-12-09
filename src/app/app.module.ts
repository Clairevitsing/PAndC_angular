import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './collection/category/category.component';
import { CollectionComponent } from './collection/collection/collection.component';
import { NavCategoryComponent } from './collection/nav-category/nav-category.component';
import { RegisterComponent } from './register/register.component';
import {NgChartsModule} from "ng2-charts";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ShareButtonsModule} from "ngx-sharebuttons/buttons";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    ReactiveFormsModule,
    NgChartsModule,
    ShareButtonsModule
  ],
  providers: [
    NftService,
    CategoryService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
