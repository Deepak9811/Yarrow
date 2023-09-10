import {IItem} from './model/item.model';
import { IProfile } from './model/profile.model';
export const requestedData: IItem[] = [
  {
    id: '1',
    itemName: 'Sofa 6 Seater',
    pickDate: new Date(2022, 10, 16).toString(),
    dropDate: new Date(2022, 12, 3).toString(),
    pickLocation: '123 Headingly JS Park, USA',
    dropLocation: '123 Headingly JS Park, USA',
    riderName: 'Johan Doe',
    picture:
      'https://images.unsplash.com/photo-1668437888373-14b7e43160b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: '2',
    itemName: 'Sofa 6 Seater',
    pickDate: new Date(2022, 10, 3).toString(),
    dropDate: new Date(2022, 12, 3).toString(),
    pickLocation: '123 Headingly JS Park, USA',
    dropLocation: '123 Headingly JS Park, USA',
    riderName: 'Johan Doe',
    picture:
      'https://images.unsplash.com/photo-1668526448618-fa1c03031301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  },
];
export const myItem: IItem[] = [
  {
    id: '1',
    itemName: 'Sofa 6 Seater',
    pickDate: new Date(2022, 10, 3).toString(),
    dropDate: new Date(2022, 11, 26).toString(),
    pickLocation: '123 Headingly JS Park, USA',
    dropLocation: '123 Headingly JS Park, USA',
    riderName: 'Johan Doe',
    picture:
      'https://images.unsplash.com/photo-1668437843313-f65ffbc735ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: '2',
    itemName: 'Toyota Corolla',
    pickDate: new Date(2022, 10, 3).toString(),
    dropDate: new Date(2022, 10, 17).toString(),
    pickLocation: '123 Headingly JS Park, Canada',
    dropLocation: '123 Headingly JS Park, Canada',
    riderName: 'Johan Doe',
    picture:
      'https://images.unsplash.com/photo-1668526448618-fa1c03031301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
  },
  {
    id: '3',
    itemName: 'Honda Civic',
    pickDate: new Date(2022, 10, 17).toString(),
    dropDate: new Date(2022, 10, 17).toString(),
    pickLocation: '123 Headingly JS Park, Canada',
    dropLocation: '123 Headingly JS Park, Canada',
    riderName: 'Johan Doe',
    picture:
      'https://images.unsplash.com/photo-1668437888373-14b7e43160b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
];

// export const profileDummyData: IProfile = {
//   profilePic:
//     'https://images.unsplash.com/photo-1668437888373-14b7e43160b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
//   name: 'Johan Doe',
//   address: '123 Headingly JS Park, Canada',
//   password:"123456",
//   email:"test@test.com",
//   phoneNumber:"+923011234567"
// };
