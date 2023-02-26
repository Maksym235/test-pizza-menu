import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormTitle = styled.h1``;

export const FormSt = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const LabelSt = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FieldSt = styled(Field)`
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ErrorMesg = styled.div`
  font-weigh: 500px;
  font-size: 18px;
  color: red;
`;
