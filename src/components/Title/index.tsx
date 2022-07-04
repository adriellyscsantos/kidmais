import React from 'react';
import {TextTitle} from './styles';

interface TitleProps {
  children: string;
}
const Title = ({children}: TitleProps) => {
  return <TextTitle>{children}</TextTitle>;
};

export default Title;
