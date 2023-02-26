import React from 'react';

import data from 'Data/data.json';
import { Section } from './Section/Section';
import { PizzaList } from './PizzaList/PizzaList';
import { Modal } from './Modal/Modal';
import { FormikForm } from './Form/Form';
export class App extends React.Component {
  state = {
    pizzas: data,
    isOpen: false,
  };

  togleBtn = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  render() {
    return (
      <Section title={`Pizza menu`}>
        {this.state.isOpen && (
          <Modal onClose={this.togleBtn}>
            <FormikForm />
          </Modal>
        )}
        <PizzaList pizzas={this.state.pizzas} modalBtn={this.togleBtn} />
      </Section>
    );
  }
}
