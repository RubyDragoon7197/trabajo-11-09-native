import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Estado() {
  const [numero, setNumero] = useState(0);

  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontSize: 18 }}>Contador: {numero}</Text>
      <Button title="Aumentar" onPress={() => setNumero(numero + 1)} />
      <Button title="Disminuir" onPress={() => setNumero(numero - 1)} />
      <Button title="Resetear" onPress={() => setNumero(0)} />
    </View>
  );
}
