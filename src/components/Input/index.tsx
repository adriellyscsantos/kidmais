import React from 'react';
import {Inputs, InputLabel} from './styles';

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
}

const Input = ({label, placeholder, type}: InputProps) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Inputs placeholder={placeholder} type={type} />
    </>
  );
};

export default Input;
