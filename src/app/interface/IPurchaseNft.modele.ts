import {INft} from "./INft.modele";
import {IUser} from "./IUser.modele";

interface PurchaseNft {
  id: number;
  User: IUser;
  Nft: INft;
  nftPriceEth: number;
  nftPriceEur: number;
  purchaseDate: Date;
}
