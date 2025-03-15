import React from 'react';
import * as Styled from './Input.ts';

export default function Input() {
  return (
    <Styled.Container>
      <Styled.Label>Email</Styled.Label>
      <Styled.Input placeholder="Teste"></Styled.Input>
    </Styled.Container>
  );
}