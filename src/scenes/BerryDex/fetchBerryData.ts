import Pokedex from "../pokedex";
import wrapPromise from "../../util/wrapPromise";

export type BerryResult = {
  url: string;
  name: string;
};

export const berryListPromise = Pokedex.getBerriesList().then(
  (resolve: any) => {
    const { results } = resolve;
    return results as BerryResult[];
  }
);

export const fetchBerryList = () => wrapPromise(berryListPromise);
