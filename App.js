import * as React from "react";
import { View, Text, Image, Button } from "react-native";

export default function App() {

  let nome = 'Matheus';

  return (
    <View>
      <Text style={{ color: '#FF0000', fontSize: 25, margin: 10 }}>
        Olá {nome}
      </Text>

      <Button title="Entrar"/>

      <Jobs
        Largura={500}
        Altura={500}
        Name={nome}
      />

    </View>
  );
}

function Jobs(Props) {

  let img = 'http://sujeitoprogramador.com/steve.png';

  return (
    <View>
      <Image
      source={{ uri: img }}
      style={{ width: Props.Largura, height: Props.Altura }}
      />
      <Text>
        Foto de {Props.Name}
      </Text>
    </View>
  )
}
