import React from 'react';
import { PasswordText, PasswordPress } from './passwordStyle';
import { Ionicons } from '@expo/vector-icons';

export function PasswordItem({ data, removePassword, copyPassword }) {
  return (
    <PasswordPress onLongPress={copyPassword}>
      <PasswordText>{data}</PasswordText>
      <Ionicons name='trash' color={'white'} onPress={removePassword} />
    </PasswordPress>
  );
}
