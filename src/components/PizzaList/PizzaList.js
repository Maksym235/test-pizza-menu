import { PizzaListSt } from './PizzaList.styled';
import { PizzaItem } from 'components/PizzaItem/PizzaItem';
export function PizzaList({ pizzas }) {
  return (
    <PizzaListSt>
      {pizzas.map(pizza => {
        return <PizzaItem key={pizza.id} pizza={pizza} />;
      })}
    </PizzaListSt>
  );
}
