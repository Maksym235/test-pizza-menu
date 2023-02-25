import React from 'react';
import data from 'Data/data.json';
import { Section } from './Section/Section';
import { PizzaList } from './PizzaList/PizzaList';

export class App extends React.Component {
  state = {
    pizzas: data,
  };

  render() {
    return (
      <Section title={`Pizza menu`}>
        <PizzaList pizzas={this.state.pizzas} />
      </Section>
    );
  }
}
