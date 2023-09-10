import {makeAutoObservable} from 'mobx';
class Store {
  paymentType = '';
  itemCount = 0;
  subscription = 0;
  constructor() {
    makeAutoObservable(this);
  }
  updatePaymentType(type: string) {
    this.paymentType = type;
  }
  updateItemCount(length: number) {
    this.itemCount = length;
  }
  updateSub(type: number) {
    console.log('updata subscription :->> ', type);
    this.subscription = type;
  }
}
export const store = new Store();
