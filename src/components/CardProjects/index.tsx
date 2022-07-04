import React from 'react';
import {Container, Image, ImageTitle} from './styles';

interface CardProjectsProps {
  title: string;
  src: string;
}

const CardProjects = ({title, src}: CardProjectsProps) => {
  return (
    <Container>
      <ImageTitle>{title}</ImageTitle>
      <Image source={src} />
    </Container>
  );
};

export default CardProjects;
