import { useState } from 'react';

import data from 'Data/data.json';
import { Section } from './Section/Section';
import { PizzaList } from './PizzaList/PizzaList';
import { Modal } from './Modal/Modal';
import { FormikForm } from './Form/Form';

export function App() {
  const [pizzas, setPizzas] = useState(data);
  const [isOpen, setOpen] = useState(false);

  function togleBtn(evt) {
    setOpen(!isOpen);
  }

  return (
    <Section title={`Pizza menu`}>
      {isOpen && (
        <Modal onClose={togleBtn}>
          <FormikForm />
        </Modal>
      )}
      <PizzaList pizzas={pizzas} modalBtn={togleBtn} />
    </Section>
  );
}

// export class App extends React.Component {
//   state = {
//     pizzas: data,
//     isOpen: false,
//   };

//   togleBtn = () => {
//     this.setState(({ isOpen }) => ({
//       isOpen: !isOpen,
//     }));
//   };

//   render() {
//     return (

//     );
//   }
// }
