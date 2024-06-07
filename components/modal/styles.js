import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  background-color: rgba(24, 24, 24, 0.6);
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
  background-color: #fff;
  width: 75%;
  padding: 24px 0px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-bottom: 24px;
`;

export const PasswordView = styled.Pressable`
  background-color: #0e0e0e;
  width: 70%;
  padding: 14px 0px;
  border-radius: 8px;
`;

export const GeneratedPassword = styled.Text`
  color: #fff;
  text-align: center;
`;

export const ButtonsArea = styled.View`
  flex-direction: row;
  width: 90%;
  margin-top: 8px;
  justify-content: space-around;
`;

export const GoBack = styled.Text`
  align-items: center;
  margin: 14px 0px;
  font-weight: bold;
  padding: 14px 20px;
  border-radius: 8px;
`;

export const SavePassword = styled.Text`
  align-items: center;
  margin: 14px 0px;
  font-weight: bold;
  color: #fff;
  background-color: #392de9;
  padding: 14px 20px;
  border-radius: 8px;
`;

export const OpacityButton = styled.TouchableOpacity``;
