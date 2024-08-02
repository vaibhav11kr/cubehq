import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Photo {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

interface Props {
  customer: Customer;
}

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentPhotos, setCurrentPhotos] = useState<Photo[]>([]);

  let pageNumber = 1;

  useEffect(() => {
    pageNumber = Math.floor(Math.random() * 10) + 1;
    const fetchPhotos = async () => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${pageNumber}`);
      setPhotos(response.data);
      setCurrentPhotos(response.data.slice(0, 9));
    };
    fetchPhotos();
  }, [customer]);
  
  useEffect(() => {
    const intervalId = setInterval(async () => {
      pageNumber++;
      const response = await axios.get(`https://picsum.photos/v2/list?page=${pageNumber}`);
      setCurrentPhotos(response.data.slice(0, 9));
    }, 10000);
    return () => clearInterval(intervalId);
  }, [customer]);

  return (
    <div className="customer-details">
      <h1>{customer.name}</h1>
      <p>{customer.address}</p>
      <div className="photo-grid">
        {currentPhotos.map((photo) => (
          <img key={photo.id} src={photo.download_url} alt={photo.author} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;