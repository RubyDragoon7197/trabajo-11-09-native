import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Booleano() {
  const [booleano, setBooleano] = useState(true);

  let colorTexto = booleano ? "blue" : "red";
  let mensaje = booleano
    ? "El booleano es Verdadero"
    : "El booleano es Falso";

  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ color: colorTexto, fontSize: 18 }}>{mensaje}</Text>
      <Button
        title="Cambiar booleano"
        onPress={() => setBooleano(!booleano)}
      />
    </View>
  );
}
