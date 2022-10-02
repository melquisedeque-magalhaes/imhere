import { Alert, FlatList, Text, View } from "react-native";

import { ButtonAddOrRemove } from "../../components/ButtonAddOrRemove";
import { Input } from "../../components/Input";
import { Participant } from "../../components/Participant";
import { monthLong, week } from "../../constants/calendary";

import { styles } from "./styles";

export function Home(){

  const names = ['Melqui', 'Diego', 'Lucas', 'Kassia']

  const date = new Date()

  const day = date.getDay()
  const dayLong = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  function handleRemoveParticipant(name: string) {

    Alert.alert('Remover', `Remover o ${name} ?`,[{
      text: 'Não'
    },{
      text: 'Sim'
    }])
  }

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.description}>{week[day]}, {dayLong} de {monthLong[month + 1]} de {year}.</Text>

      <View style={styles.form}>
        <Input placeholder="Nome do participante" placeholderTextColor="#6B6B6B" />
        <ButtonAddOrRemove />
      </View>

      <Text style={styles.subTitle}>Participantes</Text>

      <FlatList 
        data={names}
        keyExtractor={item => item}
        renderItem={({item }) => (
          <Participant name={item} onRemove={() => handleRemoveParticipant(item)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Ninguém chegou no evento ainda? {'\n'}
            Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
      
    </View>
  )
}