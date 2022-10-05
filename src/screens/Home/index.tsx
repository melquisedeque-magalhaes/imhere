import { useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { Button } from "../../components/Button";

import { ButtonAddOrRemove } from "../../components/ButtonAddOrRemove";
import { Input } from "../../components/Input";
import { Participant } from "../../components/Participant";
import { monthLong, week } from "../../constants/calendary";
import { randomIntFromInterval } from "../../util/randomNumbers";

import { styles } from "./styles";

interface Participant {
  id: number
  nameParticipant: string
}

export function Home(){
  const [participants, setParticipants] = useState<Participant[]>([])
  const [nameParticipant, setNameParticipant] = useState('')
  const [counterParticipants, setCounterParticipants] = useState(0)

  const date = new Date()

  const day = date.getDay()
  const dayLong = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  function handleAddParticipant() {
    if(!nameParticipant.trim())
      return Alert.alert('Error', 'Por favor digite o nome do participante')

    setCounterParticipants(oldState => oldState + 1)

    const participant = {
      id: counterParticipants,
      nameParticipant
    }

    setParticipants(oldState => [participant, ...oldState])
    setNameParticipant('')
  }

  function filterParticipants(id: number) {
    const removeParticipant = participants.filter(participant => participant.id !== id)

    setParticipants(removeParticipant)
    setCounterParticipants(oldState => oldState - 1)
  }

  function handleSortParticipant(){

    const indexRandom =  randomIntFromInterval({ min: 0, max: counterParticipants })

    const selectedParticipant = participants[indexRandom]

    Alert.alert(`O participante escolhido foi ${selectedParticipant?.nameParticipant}`)
  }

  function handleRemoveParticipant(id: number) {

    const findParticipant = participants.find(participant => participant.id === id)

    if(!findParticipant)
      return Alert.alert('Participante não cadastrado!')

    Alert.alert('Remover', `Remover o ${findParticipant?.nameParticipant} ?`,[{
      text: 'Não'
    },{
      text: 'Sim',
      onPress: () => filterParticipants(findParticipant.id)
    }])
    
  }

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.description}>{week[day]}, {dayLong} de {monthLong[month + 1]} de {year}.</Text>

      <View style={styles.form}>
        <Input 
          value={nameParticipant} 
          onChangeText={setNameParticipant} 
          placeholder="Nome do participante" 
          placeholderTextColor="#6B6B6B" 
        />
        <ButtonAddOrRemove onPress={handleAddParticipant} />
      </View>

      <Text style={styles.subTitle}>Participantes</Text>

      <FlatList 
        data={participants}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({item }) => (
          <Participant name={item.nameParticipant} onRemove={() => handleRemoveParticipant(item.id)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Ninguém chegou no evento ainda? {'\n'}
            Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

      {
        participants.length !== 0 && (
          <View style={styles.footer}>
            <Button onPress={handleSortParticipant}>Sortear</Button>
          </View>
        ) 
      }
      
    </View>
  )
}