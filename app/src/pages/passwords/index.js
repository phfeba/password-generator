import { useState, useEffect } from 'react';
import {
  PasswordsContainer,
  PasswordsContent,
  PasswordsList,
  Title,
  TitleArea,
} from './styles';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '@/hooks/useStorage';
import { PasswordItem } from './components/passwordItem';
import * as Clipboard from 'expo-clipboard';

export function Passwords() {
  const [passwordsList, setPasswordsList] = useState([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();
  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem('@pass');
      setPasswordsList(passwords);
    }
    loadPasswords();
  }, [focused]);

  async function handleDeletePassword(item) {
    const passwords = await removeItem('@pass', item);
    setPasswordsList(passwords);
  }

  async function handleCopyPassword(item) {
    await Clipboard.setStringAsync(item);
    alert('Senha copiada com sucesso!');
  }

  return (
    <PasswordsContainer>
      <TitleArea>
        <Title>Minhas senhas</Title>
      </TitleArea>
      <PasswordsContent>
        <PasswordsList
          data={passwordsList}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordItem
              data={item}
              removePassword={() => handleDeletePassword(item)}
              copyPassword={() => handleCopyPassword(item)}
            />
          )}
        />
      </PasswordsContent>
    </PasswordsContainer>
  );
}
