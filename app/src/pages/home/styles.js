import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  flex: 1;
  background-color: #f3f3f3;
  justify-content: center;
  align-items: center;
`;

export const StyledLogo = styled.Image`
  margin-bottom: 60px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: black;
`;

export const SliderArea = styled.View`
  margin: 14px 0px;
  width: 70%;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
`;

export const TouchableButton = styled.TouchableOpacity`
  width: 70%;
  background-color: #392de9;
  height: 55px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 40px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;
