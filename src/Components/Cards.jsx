import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Cards.css';

const Card = ({ images, user, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span>{user.name}</span>
      </div>
      <Carousel showThumbs={false} className="card-carousel">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Post ${index}`} className="card-image" />
          </div>
        ))}
      </Carousel>
      <div className="card-body">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
