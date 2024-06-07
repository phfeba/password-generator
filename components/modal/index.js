import {
  ButtonsArea,
  GeneratedPassword,
  GoBack,
  ModalContainer,
  ModalContent,
  ModalTitle,
  OpacityButton,
  PasswordView,
  SavePassword,
} from './styles';
import * as Clipboard from 'expo-clipboard';
import useStorage from '../../hooks/useStorage';

export function ModalPassword({ password, handleClose }) {
  const { saveItem } = useStorage();

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password);
    await saveItem('@pass', password);
    alert('Senha copiada com sucesso!');
    handleClose();
  }

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Senha gerada</ModalTitle>
        <PasswordView onLongPress={handleCopyPassword}>
          <GeneratedPassword>{password}</GeneratedPassword>
        </PasswordView>
        <ButtonsArea>
          <OpacityButton onPress={handleClose}>
            <GoBack>Voltar</GoBack>
          </OpacityButton>
          <OpacityButton onPress={handleCopyPassword}>
            <SavePassword>Salvar senha</SavePassword>
          </OpacityButton>
        </ButtonsArea>
      </ModalContent>
    </ModalContainer>
  );
}
