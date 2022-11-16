import React from 'react';


const item = {
  name: "Alex",
  age: 25,
  email: "alex@gmail.com"
}

function ItemCard() {

  return (
    <div className="item-card">
      <p>
        Name: {item.name}
      </p>
      <p>
        Age: {item.age}
      </p>
      <p>
        email: {item.email}
      </p>
    </div>
  )
}

export default ItemCard;