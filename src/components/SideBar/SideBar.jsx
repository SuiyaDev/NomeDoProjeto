import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import styled from "styled-components/native";
import { FontAwesomeIcon, Icon } from "react-native-vector-icons/FontAwesome";

export const SideBar = ({navigation}) => {

  return (
    <ViewSideBarHome>
      <TextLeavy>LEAVY GRUMPY</TextLeavy>
      <ViewTextsSideBar>
        <TextSideBar onPress={() => navigation.navigate("Home")}>
          <Image
            style={{ width: "15px", height: "15px", marginRight: "10px" }}
            source={require("../../images/house2.png")}
          />
          Início
        </TextSideBar>
        <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
          <Image
            style={{ width: "15px", height: "15px", marginRight: "10px" }}
            source={require("../../images/star.png")}
          />
          <Text>Favoritos</Text>
        </TouchableOpacity>
      </ViewTextsSideBar>
    </ViewSideBarHome>
  );
};

const ViewSideBarHome = styled.View`
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: #6366f1;
`;

const TextSideBar = styled.Text`
  display: flex;
  color: #fff;
  font-size: 16px;
  margin-top: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #7671cb;
`;
const ViewTextsSideBar = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`;

const TextLeavy = styled.Text`
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
  margin-top: 20px;
`;
