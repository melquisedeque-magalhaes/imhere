import { Text, View } from "react-native";

import { ButtonSuccess } from "../../components/ButtonAdd";
import { Input } from "../../components/Input";
import { monthLong, week } from "../../constants/calendary";

import { styles } from "./styles";

export function Home(){
  const date = new Date()

  const day = date.getDay()
  const dayLong = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.description}>{week[day]}, {dayLong} de {monthLong[month + 1]} de {year}.</Text>

      <View style={styles.form}>
        <Input placeholder="Nome do participante" placeholderTextColor="#6B6B6B" />
        <ButtonSuccess />
      </View>
      
    </View>
  )
}