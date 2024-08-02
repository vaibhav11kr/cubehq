import React from 'react';

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface Props {
  customer: Customer;
  isSelected: boolean;
  onClick: () => void;
}

const CustomerCard: React.FC<Props> = ({ customer, isSelected, onClick }) => {
  return (
    <div
      className={`customer-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;