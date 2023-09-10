export interface IItem {
  additionalNote: string;
  createdBy: string;
  createdOn: string;
  id: string;
  images: string[];
  initialPickupAddress: string;
  itemName: string;
  initialPickupTime: string;
  scheduleRoutine: ISchedule[];
}
export interface ISchedule {
  id: number;
  pickUpTime: string;
  pickUpAddress: string;
  dropTime: string;
  dropAddress: string;
}
