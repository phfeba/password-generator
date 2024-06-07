import { ButtonsArea, GeneratedPassword, GoBack, ModalContainer, ModalContent, ModalTitle, OpacityButton, PasswordView, SavePassword } from './styles';

export function ModalPassword({ password, handleClose }) {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Senha gerada</ModalTitle>
        <PasswordView>
          <GeneratedPassword>{password}</GeneratedPassword>
        </PasswordView>
        <ButtonsArea>
          <OpacityButton onPress={handleClose}>
            <GoBack>Voltar</GoBack>
          </OpacityButton>
          <OpacityButton>
            <SavePassword>Salvar senha</SavePassword>
          </OpacityButton>
        </ButtonsArea>
      </ModalContent>
    </ModalContainer>
  );
}
