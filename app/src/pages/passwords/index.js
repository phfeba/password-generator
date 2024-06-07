import { useState, useEffect } from 'react';
import { PasswordsContainer, Title, TitleArea } from './styles';
import { useIsFocused } from '@react-navigation/native';

export function Passwords() {
  return (
    <PasswordsContainer>
      <TitleArea>
        <Title>Minhas senhas</Title>
      </TitleArea>
    </PasswordsContainer>
  );
}
