import { ViewCardMain, ViewHomeMain, ButtonSide } from "./Styles";
import { SideBar } from "../SideBar/SideBar.jsx";
import { Card } from "../../shared/components/Card/Card.jsx";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const Home = ({navigation}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)


  return (
    <ViewHomeMain>
      {sidebarOpen && <SideBar navigation={navigation}  />}
      <TouchableOpacity onPress={() => setSidebarOpen(!sidebarOpen)}>
        <Text>SIDE</Text>
      </TouchableOpacity>
      <ViewCardMain>
        <Card />
      </ViewCardMain>
    </ViewHomeMain>
  );
};
