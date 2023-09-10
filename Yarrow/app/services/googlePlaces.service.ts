import {create} from 'apisauce';
import {Platform} from 'react-native';
import {ANDROID_API_KEY, IOS_API_KEY, PLACES_URL} from '../config/config';
import {IPlaces} from '../model/places.model';
interface Response {
  predictions: IPlaces[];
  status: string;
}
export const placesApi = create({
  baseURL: PLACES_URL,
  headers: {Accept: 'application/json'},
});
const key = Platform.OS === 'ios' ? IOS_API_KEY : ANDROID_API_KEY;

export const getPlaces = async (search: string) => {
  const response = await placesApi.post<Response>(
    `/autocomplete/json?key=${key}&input=${search}&component:country:pk`,
  );
  console.log(response.data);
  if (response.ok) {
    return response.data!.predictions;
  } else {
    return [];
  }
};
export const getPlaceDetail = async (placeId: string) => {
  const response = await placesApi.post<Response>(``);
  console.log(response.data);
  if (response.ok) {
    return response.data!.predictions;
  } else {
    return [];
  }
};
