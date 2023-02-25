import styled from 'styled-components';

export const PizzaItemSt = styled.li`
  width: 150px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  background-color: #e5d2fb;
  box-shadow: 10px 10px 23px 0px rgba(201, 125, 201, 1);
  -moz-box-shadow: 10px 10px 23px 0px rgba(201, 125, 201, 1);
  box-shadow: 10px 10px 23px 0px rgba(201, 125, 201, 1);
`;
export const PizzaImg = styled.img`
  widht: 150px;
  height: 150px;
  margin-bottom: 10px;

  animation: rotation 4s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
`;

export const PizzaDesc = styled.p`
  margin: 0;
  border-bottom: 1px solid black;
  font-size: 18px;
  font-weight: 500px;
`;

export const DelivBtn = styled.button`
  height: 30px;
  margin-top: auto;
  border-radius: 20px;
  border: none;
  background-color: #bde1ce;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: #97b4a4;
  }
`;
//   transform: rotate(360deg);

//   transition: rotate 0.2s linear;
