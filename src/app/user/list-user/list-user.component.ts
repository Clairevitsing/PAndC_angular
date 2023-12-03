import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { IUser } from '../../interface/IUser.modele';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{

  // Initialisation d'un tableau vide qu'on va venir remplir par la suite avec tout nos users récupérés grâce à la méthode displayAllUser()
  users: IUser[] = [];

  constructor(private user: UserService){}

  // ngOnInit va permettre, lors du chargement ed la page internet, de récupérer les informations de la méthode, en l'occurence, displayAllUser();
  ngOnInit(){
    this.displayAllUser();
  }

  // Méthode qui permet de récupérer les users via notre service
  displayAllUser(){
    this.user.getAllUsers().subscribe(
      (data) => {
        this.users = data['hydra:member'];
      }
    );
  }
}
