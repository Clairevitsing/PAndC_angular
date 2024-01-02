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
import {ToastrModule} from "ngx-toastr";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from "./login/login.component";
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {NgChartsModule} from "ng2-charts";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ShareButtonsModule} from "ngx-sharebuttons/buttons";
import {ShareIconsModule} from "ngx-sharebuttons/icons";
import {TokenInterceptorProvider} from "./interceptor/token.interceptor";
import {CollectionDetailsComponent} from "./collection/collection-details/collection-details.component";
import {AddCollectionComponent} from "./collection/add-collection/add-collection.component";
import {ListCollectionComponent} from "./collection/list-collection/list-collection.component";


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
    AddCollectionComponent,
    CollectionDetailsComponent,
    ListCollectionComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
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
    ShareButtonsModule,
    ShareIconsModule,
  ],
  providers: [
   TokenInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
