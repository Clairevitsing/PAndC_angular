import {IUser} from "./IUser.modele";

export interface ICategory {
  id: number,
  name: string;
  description:string;
  nfts:[
    {
      id: number;
      name: string;
      img: string;
      nftPrice: {
        price_date: Date;
        price_eth_value: number;
      };
      stock: number;
    }
  ];
}



