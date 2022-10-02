import { Text, View } from "react-native";
import { ButtonAddOrRemove } from "../ButtonAddOrRemove";
import { styles } from "./styles";

interface ParticipantProps {
  name: string
  onRemove: () => void
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.participantContainer}>
      <Text style={styles.nameText}>{name}</Text>
      <ButtonAddOrRemove onPress={onRemove} variant="remove" />
    </View>
  )
}