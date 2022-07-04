import styled from 'styled-components/native';

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const SecondaryTextButton = styled.Text`
  color: #ab82ff;
  font-weight: bold;
  text-align: center;
`;

export const PrimaryButton = styled.TouchableOpacity`
  background-color: #ab82ff;
  color: #fff;
  padding: 12px 50px;
  border-radius: 5px;
  text-align: center;
  margin: 10px 40px 0px 40px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  background-color: #fff;
  padding: 12px 50px;
  border-radius: 5px;
  text-align: center;
  margin: 10px 40px 0px 40px;
  border: 1px solid #ab82ff;
`;
