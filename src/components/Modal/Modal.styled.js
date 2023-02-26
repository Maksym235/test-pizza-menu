import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  min-width: 600px;
  woidth: 100%;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 5px;
  z-index: 11;
`;
