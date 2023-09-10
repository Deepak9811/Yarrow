export interface IPlaces {
  description?: string;
  place_id?: string;
  reference?: string;
  matched_substrings?: any[];
  tructured_formatting?: Object;
  terms?: Object[];
  types?: string[];
}
export default interface ILocation {
  id: string;
  place: string;
  country: string;
}
