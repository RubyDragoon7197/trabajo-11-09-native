import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function Objeto() {
  const [usuario, setUsuario] = useState({
    nombre: "Juan",
    edad: "25",
  });

  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontSize: 18 }}>Nombre: {usuario.nombre}</Text>
      <Text style={{ fontSize: 18 }}>Edad: {usuario.edad}</Text>

      <TextInput
        style={{
          borderWidth: 1,
          marginTop: 5,
          padding: 5,
          borderRadius: 5,
        }}
        placeholder="Cambia el nombre"
        value={usuario.nombre}
        onChangeText={(text) => setUsuario({ ...usuario, nombre: text })}
      />
      <TextInput
        style={{
          borderWidth: 1,
          marginTop: 5,
          padding: 5,
          borderRadius: 5,
        }}
        placeholder="Cambia la edad"
        value={usuario.edad}
        onChangeText={(text) => setUsuario({ ...usuario, edad: text })}
        keyboardType="numeric"
      />
    </View>
  );
}
