import React from 'react';
import Button from './Button'
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Form = () => (
  <FormContainer>
    <Input type="text" placeholder="Post Title" />
    <Input type="text" placeholder="Post Description" />
    <Button text="Submit" />
  </FormContainer>
);

export default Form;