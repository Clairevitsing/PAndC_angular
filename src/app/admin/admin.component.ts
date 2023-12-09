import {Component, OnInit} from '@angular/core';
import {IUser} from "../interface/IUser.modele";
import {INft} from "../interface/INft.modele";
import {of, switchMap} from "rxjs";
import {AdminService} from "../service/admin.service";
import {ICategory} from "../interface/ICategory.modele";
import {PurchaseNftService} from "../service/purchase-nft.service";
import {IAddress} from "../interface/IAddress.modele";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent implements OnInit {
  nfts: INft[]= []
  address: IAddress[]=[]
  purchaseNft: IPurchaseNft[] = []
  users: IUser[] = []
  user!: IUser;

  constructor(private adminService: AdminService){}

  ngOnInit() {

    this.getUsers();
    this.getNfts();
  }

  getUsers(): void{
    this.adminService.getUsers().subscribe({
      next: (response) => {
        this.users = response;
      }
    });
  }

  getNfts(): void{
    this.adminService.getNfts().subscribe({
      next: (response) => {
        this.nfts = response;
      }
    });
  }

  deleteUser(UserId: number){
    this.deletePurchaseNftToUser(UserId);
    this.adminService.deleteUser(UserId).subscribe(
      {
        next: (response) =>{
          console.log("Utilisateur supprimé !");
          this.getUsers();
        },
        error:(error) =>{
          console.error("Erreur lors de la suppresion"+error);
        }
      }
    )
  }

  deleteNft(NftId: number){
    this.deletePurchaseNftFromNft(NftId);
    this.adminService.deleteNft(NftId).subscribe(
      {
        next: (response) =>{
          console.log("Nft supprimé !");
          this.getNfts();
        },
        error:(error) =>{
          console.error("Erreur lors de la suppresion"+error);
        }
      }
    )
  }

  deletePurchaseNftToUser(UserId: number){
    this.adminService.getPurchases().forEach((purchases: IPurchaseNfts[])=> {
      purchases.forEach((purchase: PurchaseNftService) => {
        if(purchase.UserId === User.id){
          this.PurchaseNftService.deleteNftFromUser(purchase.id).subscribe({
            next: (response) => console.log("Achat de l'utilisateur supprimé")
          })
        }
      });
    })
  }
  deletePurchaseNftFromNft(NftId: number){
    this.adminService.getPurchases().forEach((purchases: IPurchaseNft[]) => {
      purchases.forEach((purchase: IPurchaseNft) => {
        if(purchase.Nft.id === NftId){
          this.purchaseNftService.deleteNftFromUser(purchase.id).subscribe({
            next: (response) => console.log("Achat de l'utilisateur supprimé")
          })
        }
      });
    })
  }

  onEditUser(AddressId: number, UserId: number){
    this.users.forEach((user: IUser) => {
      if(user.id === UserId){
        this.adminService.setAddress(AddressId,user.Address.street, user.Address.ZIPCode, user.Address.city)
          .pipe(
            switchMap((response) => {
              if (response) {
                console.log('Adresse modifiée avec succès !');
                return this.adminService.setUser(UserId, user.pseudo, user.email, user.gender, user.lastname, user.firstname, user.birthDate, user.Adress.id);
              }
              return of(null);
            })
          )
          .subscribe({
            next: (response) => {
              if (response) {
                console.log('Modifié avec succès !');
                this.getUsers();
                window.scrollTo(0, 0);
                window.location.reload();
              }
            },
            error: (error) => {
              console.error('Erreur lors de la connexion:', error);
              window.scrollTo(0, 0);
            },
          });
      }
    });
  }

  onEditNft(nftId: number, nftCategoryId: number, nftImg: string){
    this.nfts.forEach(nft =>{
      if(nftId === nft.id){
        this.nftService.setNft(nftId, nft.name, nftCategoryId, nft.description, nftImg, nft.stock).subscribe({
          next: (response) => {
            if (response) {
              console.log('Modifié avec succès !');
              this.getNfts();
              window.scrollTo(0, 0);
              window.location.reload();
            }
          },
          error: (error) => {
            console.error('Erreur lors de la connexion:', error);
            window.scrollTo(0, 0);
          },
        })
      }
    })
  }
}

