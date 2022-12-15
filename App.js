import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    if (imc < 18.6) {
      alert("Você está abaixo do Peso! " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc <= 24.9) {
      alert("Você está com Peso Ideal! " + imc.toFixed(2));
    } else if (imc >= 25 && imc <= 29.9) {
      alert("Você está levemente acima do peso! " + imc.toFixed(2));
    } else if (imc >= 30 && imc <= 34.9) {
      alert(
        "Você está com Obesidade Classe I " +
          imc.toFixed(2) +
          `\n É recomendado procurar um médico`
      );
    } else if (imc >= 35 && imc <= 39.9) {
      alert(
        "Você está com Obesidade Classe II " +
          imc.toFixed(2) +
          `\n É recomendado procurar um médico`
      );
    } else if (imc >= 40) {
      alert(
        "Você está com Obesidade Classe III " +
          imc.toFixed(2) +
          `\n É recomendado procurar um médico`
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Seu Peso (Kg)"
        placeholderTextColor="#fff"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Sua Altura (cm)"
        placeholderTextColor="#fff"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 30,
  },
  input: {
    backgroundColor: "#121212",
    borderRadius: 10,
    margin: 15,
    padding: 15,
    color: "#fff",
    fontSize: 23,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    backgroundColor: "#41aef4",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
});
