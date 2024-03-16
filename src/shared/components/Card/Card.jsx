import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

export const Card = () => {

  const frases = [
    {
      title: "Frase do Dia",
      frase: "Hoje o dia está linda igual a você."
    },
  
  ]

  return (
    <View>
      {frases.map((item, index) => (
        <StyledCard key={index}>
          <TextTitle>{item.title}</TextTitle>
          <TextCard>{item.frase}</TextCard>
        </StyledCard>
      ))}
    </View>
  );
};

export const StyledCard = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  background-color: #5552CA;
  shadow-color: #000;

  width: 250px;
  height: 150px;

  margin-right: 50px;
  margin-top: 40px;
  border-radius: 10px;
  padding-left: 20px;
  
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;

  z-index: 1;
`;

export const TextCard = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
`;

export const TextTitle = styled.Text`
  color: #fff;
  font-size: 16px;
`;
