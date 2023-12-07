import {IUser} from "./IUser.modele";

export interface IAddress {
  id: number,
  street: string,
  city: string,
  ZIPCode:string,
  user: IUser
}
