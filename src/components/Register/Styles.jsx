import styled from 'styled-components/native';

export const ViewRegister = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #4F46E5;    
  width: 100%;
  height: 100%;
`;

export const ViewTexts = styled.View`

display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`;

export const TextRegister = styled.Text`
    color: #fff;
    font-size: ${(props) =>
      props.primary
        ? "24px"
        : props.secondary
        ? "14px"
        : props.terciary
        ? "12px"
        : "16px"};
`