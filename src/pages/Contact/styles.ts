import styled from 'styled-components/native';

export const ContainerPage = styled.View`
  background: #fff;
  height: 100%;
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 20px;
`;

export const ContainerImage = styled.View`
  margin: 0px 20px;
  /* padding: 50px 0px ; */
  /* background-color: #AB82FF; */
  border: 1px solid #ab82ff;
  padding: 30px;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
`;
export const ImageBG = styled.Image`
  width: 45px;
  height: 45px;
  margin-top: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #696969;
  text-align: left;
  margin: 0px 10px;
  padding: 8px 30px;
`;
