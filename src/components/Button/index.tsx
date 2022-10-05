import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={styles.buttonStyles}>
      <Text style={styles.buttonTextStyles}>{children}</Text>
    </TouchableOpacity>
  )
}