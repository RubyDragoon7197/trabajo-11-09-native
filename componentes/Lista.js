import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Lista() {
  const [nombres, setNombres] = useState([
    "Ana",
    "Luis",
    "Carlos",
    "Daniel",
    "Gabriel",
  ]);

  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontSize: 18, marginBottom: 5 }}>Lista de Nombres:</Text>
      {nombres.map((nombre, index) => (
        <Text key={index}>• {nombre}</Text>
      ))}
      <Button
        title="Eliminar Último"
        onPress={() => setNombres(nombres.slice(0, -1))}
      />
    </View>
  );
}
