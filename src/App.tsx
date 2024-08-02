import React, { useState } from 'react';
import CustomerCard from './components/CustomerCard';
import CustomerDetails from './components/CustomerDetails';

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

const customers: Customer[] = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Customer ${i+1}`,
  title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores dolore voluptates mollitia provident temporibus labore, maxime sint doloribus repellendus dolor esse praesentium corrupti et, recusandae voluptatum ex architecto quos.`,
  address: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, debitis asperiores architecto laboriosam, aliquam voluptatem culpa, provident numquam ipsum magni quisquam facilis reprehenderit iusto sequi veniam recusandae deleniti. Placeat, cum.
  Eos dolorum autem voluptate molestias voluptates. Fugiat esse soluta, inventore corporis dignissimos iure, dolore officia ratione vel natus possimus magnam quos non, officiis alias itaque fuga quas nam dolores dolor.`,
}));

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const handleCustomerClick = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="app">
      <header> The header goes here</header>
      <main>
      <div className="customer-list">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            isSelected={selectedCustomer === customer}
            onClick={() => handleCustomerClick(customer)}
          />
        ))}
      </div>
      <div className="customer-details-container">
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
      </main>
    </div>
  );
};

export default App;