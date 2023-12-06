import {Component, OnInit} from '@angular/core';
import {IUser} from "../interface/IUser.modele";
import {TokenService} from "../service/token.service";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  users: IUser[] = []
  user!: IUser;

  constructor(private tokenService: TokenService, private userService: UserService){}

  ngOnInit(): void {
    this.loadUsersAndFindUserByPseudo();
  }

  loadUsersAndFindUserByPseudo(): void{
    this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users['hydra:member'];
        const pseudo = this.tokenService.getUserPseudo();
        if (pseudo) {
          this.user = this.findUserByPseudo(pseudo);
        }
      }
    );
  }

  findUserByPseudo(pseudo: string): any {
    return Object.values(this.users).find(user => user.pseudo === pseudo);
  }

  isLoggedIn(): boolean {
    return this.tokenService.getIsLogged();
  }

  logout(): void {
    this.tokenService.clearTokenAndUserInfos()
  }
}
