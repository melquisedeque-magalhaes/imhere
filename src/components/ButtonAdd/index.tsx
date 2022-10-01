import { Text, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/MaterialIcons'
import { styles } from "./styles";


export function ButtonSuccess() {
  return (
    <TouchableOpacity style={styles.buttonStyles}>
      <Ionicons name="add" size={24} color="#fff" />
    </TouchableOpacity>
  )
}