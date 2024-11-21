import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './CategoryItem.css';

const CategoryItem = props => {
  return (
    <li className="category-item">
      <Card className="category-item__content">
        <Link to={`/${props.id}/category`}>
          <div className="category-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="category-item__info">
            <h2>{props.name}</h2>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default CategoryItem;
