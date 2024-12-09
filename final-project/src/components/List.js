// src/components/List.js
import React from 'react';

const List = ({ items }) => {
  return (
    <ul className="list-group my-3">
      {items && items.map((item, index) => (
        <li key={index} className="list-group-item">{item}</li>
      ))}
    </ul>
  );
};

export default List;
