import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interface/IUser.modele";
import {INft} from "../../interface/INft.modele";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {TokenService} from "../../service/token.service";
import {NftService} from "../../service/nft.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  user: IUser | undefined;
  nfts: INft[] = []
  nft: INft | undefined;
  nftUser: INft[] = []
  userConnected: any

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private tokenService: TokenService,
    private nftService: NftService){}

  async ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      try {
        this.user = await this.userService.getUser(id).toPromise();
      } catch (error) {
        console.error(error);
      }

      try {
        const nfts = await this.nftService.getAllNfts().toPromise();
        this.nfts = nfts['hydra:member'];
      } catch (error) {
        console.error(error);
      }

      this.getNftUser();
    }
    this.getUserConnected()
  }

  getUserDetails() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.userService.getUser(id).subscribe(
        (user) => {
          this.user = user;
        }
      );
    }
  }

  isLoggedIn(): boolean{
    return this.tokenService.getIsLogged();
  }

  displayAllNfts(){
    this.nftService.getAllNfts().subscribe(
      (data) => {
        this.nfts = data['hydra:member'];
      }
    );
  }

  getNftUser(){
    const userId = this.user?.id;
    if (userId) {
      this.nftUser = this.nfts.filter((nft) => nft.user.id === userId);
    }
  }

  getUserConnected(){
    const user = this.tokenService.getUserPseudo()
    this.userConnected = user
  }

}
