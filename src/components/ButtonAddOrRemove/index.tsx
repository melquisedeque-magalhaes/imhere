import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Ionicons from '@expo/vector-icons/MaterialIcons'
import { styles } from "./styles";

interface ButtonAddOrRemoveProps extends TouchableOpacityProps {
  variant?: 'add' | 'remove'
}

export function ButtonAddOrRemove({ variant = 'add', ...rest }: ButtonAddOrRemoveProps) {
  return (
    <TouchableOpacity 
      {...rest}
      style={[styles.buttonStyles, {  backgroundColor: variant === 'add' ? '#31CF67' : '#E23C44', }]}
    >
      {
        variant === 'add' 
        ? (<Ionicons name="add" size={24} color="#fff" />) 
        : (<Ionicons name="remove" size={24} color="#fff" />)
      }
    </TouchableOpacity>
  )
}