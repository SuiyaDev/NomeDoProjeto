import { TouchableOpacity, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TestandoFrases = [
  {
    frase:"dale dale dale dale dale"
  }
]


export const Favorites = ({ navigation }) => {
  const insertData = async () => {
      try {
        const uid = await AsyncStorage.getItem('userUid')
        const url = `https://leavy-grumpy-testes-default-rtdb.firebaseio.com/favoritos/${uid}.json`;
        const data = (TestandoFrases.map((item) =>{
            return{
              frase: item.frase
          }
        }))
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          console.log("Data inserted successfully");
        } else {
          console.error("Failed to insert data");
        }
      } catch (error) {
        console.error("Error:", error);
      } 
  };

  

  return (
    <View>
      <TouchableOpacity onPress={insertData}>
        <Text>Teste</Text>
      </TouchableOpacity>
    </View>
  );
};
