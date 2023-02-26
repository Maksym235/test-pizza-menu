import { PizzaListSt } from './PizzaList.styled';
import { PizzaItem } from 'components/PizzaItem/PizzaItem';
export function PizzaList({ pizzas, modalBtn }) {
  return (
    <PizzaListSt>
      {pizzas.map(pizza => {
        return <PizzaItem key={pizza.id} pizza={pizza} modalBtn={modalBtn} />;
      })}
    </PizzaListSt>
  );
}
