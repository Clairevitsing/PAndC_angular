import { ICategory } from "./ICategory.modele";
import { IUser } from "./IUser.modele";
import {INftCollection} from "./INftCollection.modele";

export interface INft {
  id: number,
  name: string,
  img: string,
  description: string,
  launchDate: Date,
  launchPriceEur: number,
  launchPriceEth: number,
  nftPrice: {
    price_date: Date;
    price_eth_value: number;
  };
  stock: number;
  category: ICategory,
  collection: INftCollection,
  user: IUser
}
