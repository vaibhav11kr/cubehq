import { Customer } from '../types/Customer';

export const fetchCustomers = async (): Promise<Customer[]> => {
    const customers: Customer[] = [
      { id: 1, name: 'John Doe', title: 'CEO', address: '123 Main St', photos: [] },
    ];
    return customers;
  };
  
  export const fetchPhotos = async (): Promise<string[]> => {
    const response = await fetch('https://api.unsplash.com/photos/random?count=9&client_id=YOUR_ACCESS_KEY');
    const data = await response.json();
    return data.map((photo: any) => photo.urls.small);
  };
  