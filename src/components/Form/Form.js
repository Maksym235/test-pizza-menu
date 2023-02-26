import React from 'react';
// import ReactDOM from 'react-dom';
import {
  FormWrapper,
  FormTitle,
  FormSt,
  LabelSt,
  FieldSt,
  ErrorMesg,
} from './Form.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';

localStorage.setItem('usersData', JSON.stringify([]));

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(11, 'Too Long!')
    .required('Required'),
});

export function FormikForm() {
  return (
    <FormWrapper>
      <FormTitle>Order</FormTitle>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <FormSt>
            <LabelSt>
              First Name
              <FieldSt name="firstName" placeholder="Jane" />
              {errors.firstName && touched.firstName ? (
                <ErrorMesg>{errors.firstName}</ErrorMesg>
              ) : null}
            </LabelSt>

            <LabelSt>
              Last Name
              <FieldSt name="lastName" placeholder="Doe" />
              {errors.lastName && touched.lastName ? (
                <ErrorMesg>{errors.lastName}</ErrorMesg>
              ) : null}
            </LabelSt>

            <LabelSt>
              Email
              <FieldSt name="email" placeholder="jane@acme.com" type="email" />
              {errors.email && touched.email ? (
                <ErrorMesg>{errors.email}</ErrorMesg>
              ) : null}
            </LabelSt>

            <LabelSt>
              Number
              <FieldSt name="number" placeholder="234-45-53" type="tel" />
            </LabelSt>

            <button type="submit">Submit</button>
          </FormSt>
        )}
      </Formik>
    </FormWrapper>
  );
}
