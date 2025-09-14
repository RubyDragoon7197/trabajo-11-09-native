import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

// Importamos los componentes
import Booleano from "./componentes/Booleano";
import Estado from "./componentes/Estado";
import Lista from "./componentes/Lista";
import Objeto from "./componentes/Objeto";
import String from "./componentes/String"; // 👈 aquí importas como String

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📱 Ejemplos en React Native</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>🔵 Booleano</Text>
        <Booleano />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>🔢 Estado (Contador)</Text>
        <Estado />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>📋 Lista</Text>
        <Lista />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>👤 Objeto</Text>
        <Objeto />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>✍️ String</Text>
        <String /> {/* 👈 aquí también debe ser String */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
});
