import {
  PizzaItemSt,
  Description,
  PizzaDesc,
  PizzaImg,
  DelivBtn,
} from './PizzaItem.styled';
import React from 'react';
import img from 'Image/pizza-icon-18.png';
export class PizzaItem extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    const { id, category, name, topping, price, rank } = this.props.pizza;

    return (
      <>
        <PizzaItemSt key={id}>
          <PizzaImg src={img} alt={name} />
          <Description>
            <PizzaDesc>Category: {category}</PizzaDesc>
            <PizzaDesc>name: {name}</PizzaDesc>
            <PizzaDesc>topping: {topping.join(', ')}</PizzaDesc>
            <PizzaDesc>price: {price}</PizzaDesc>
            <PizzaDesc>rank: {rank}</PizzaDesc>
          </Description>
          <DelivBtn>Order!</DelivBtn>
        </PizzaItemSt>
      </>
    );
  }
}
