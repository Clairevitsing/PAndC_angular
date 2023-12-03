import { ICategory } from "./ICategory.modele";
import { IUser } from "./IUser.modele";

export interface INft {
  id: number,
  name: string,
  img: string,
  description: string,
  launchDate: Date,
  launchPriceEur: number,
  launchPriceEth: number,
  category: ICategory,
  user: IUser
}
