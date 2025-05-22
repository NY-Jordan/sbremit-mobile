export enum TransactionTypeEnum {
  CASH_IN = 'Cash-in',
  CANCELED_PAYMENT = 'Canceled Payment',
  CASH_OUT = 'Cash-out',
}

export interface ITransaction {
  id: number;
  type: 'Cash-in' | 'Canceled Payment' | 'Cash-out'; 
  time: string; 
  amount: number; 
  status: 'success' | 'canceled' | 'failed'; 
}



export interface DailyTransactionGroup {
  date: string; 
  data: ITransaction[];
}

export const transactions : DailyTransactionGroup[] = [
  {
    date: '2025-06-18',
    data: [
      { id: 1, type: 'Cash-in', time: '09:37 am', amount: 1963, status: 'success' },
      { id: 2, type: 'Cash-in', time: '10:01 am', amount: 363, status: 'success' },
      { id: 3, type: 'Cash-in', time: '10:23 am', amount: 963, status: 'success' },
      { id: 4, type: 'Canceled Payment', time: '11:45 am', amount: 250, status: 'canceled' },
      { id: 5, type: 'Cash-in', time: '12:07 pm', amount: 643, status: 'success' },
      { id: 6, type: 'Cash-in', time: '01:19 pm', amount: 163, status: 'success' },
      { id: 7, type: 'Cash-in', time: '02:35 pm', amount: 1963, status: 'success' },
    ]
  },
  {
    date: '2025-06-17',
    data: [
      { id: 8, type: 'Cash-in', time: '08:12 am', amount: 420, status: 'success' },
      { id: 9, type: 'Canceled Payment', time: '09:01 am', amount: 510, status: 'canceled' },
      { id: 10, type: 'Cash-in', time: '09:30 am', amount: 820, status: 'success' },
      { id: 11, type: 'Cash-in', time: '10:45 am', amount: 1280, status: 'success' },
      { id: 12, type: 'Cash-in', time: '11:22 am', amount: 325, status: 'success' },
      { id: 13, type: 'Cash-in', time: '12:00 pm', amount: 780, status: 'success' },
      { id: 14, type: 'Cash-in', time: '01:39 pm', amount: 912, status: 'success' },
    ]
  },
  {
    date: '2025-06-16',
    data: [
      { id: 15, type: 'Cash-in', time: '07:32 am', amount: 1020, status: 'success' },
      { id: 16, type: 'Cash-in', time: '08:45 am', amount: 490, status: 'success' },
      { id: 17, type: 'Cash-in', time: '09:59 am', amount: 875, status: 'success' },
      { id: 18, type: 'Canceled Payment', time: '10:33 am', amount: 200, status: 'canceled' },
      { id: 19, type: 'Cash-in', time: '11:10 am', amount: 700, status: 'success' },
      { id: 20, type: 'Cash-in', time: '12:44 pm', amount: 620, status: 'success' },
      { id: 21, type: 'Cash-in', time: '01:50 pm', amount: 450, status: 'success' },
    ]
  }
];
