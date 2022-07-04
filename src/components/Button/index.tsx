import React from 'react';
import {
  PrimaryButton,
  TextButton,
  SecondaryButton,
  SecondaryTextButton,
} from './styles';

interface ButtonProps {
  children: string;
  onPress?: (event: Event) => void;
  type: 'primary' | 'secondary';
}

const Button = ({children, onPress, type}: ButtonProps) => {
  return (
    <>
      {type === 'primary' && (
        <PrimaryButton onPress={onPress} type={type}>
          <TextButton> {children} </TextButton>
        </PrimaryButton>
      )}
      {type === 'secondary' && (
        <SecondaryButton onPress={onPress} type={type}>
          <SecondaryTextButton> {children} </SecondaryTextButton>
        </SecondaryButton>
      )}
    </>
  );
};

export default Button;
