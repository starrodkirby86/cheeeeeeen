import Pokedex from "../pokedex";
import wrapPromise from "../../util/wrapPromise";

export type BerryResult = {
  url: string;
  name: string;
};

export type BerryFirmness = {
  id: number;
  name: string;
  berries?: any[];
  names?: any[];
};

export type BerryFlavor = {
  id: number;
  name: string;
  berries?: any[];
  contest_type?: any[];
  names?: any[];
};

export type BerryFlavorMap = {
  potency: number;
  flavor: BerryFlavor;
};

export type Berry = {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness?: BerryFirmness;
  flavors?: BerryFlavorMap[];
  item?: any;
  natural_gift_type?: any;
};

export const berryListPromise = Pokedex.getBerriesList().then(
  (resolve: any) => {
    const { results } = resolve;
    return results as BerryResult[];
  }
);

export const berryPromise = (id: string) =>
  Pokedex.getBerryByName(id).then((results: Berry) => results);

export const fetchBerryList = () => wrapPromise(berryListPromise);
export const fetchBerry = (id: string) => berryPromise(id);
