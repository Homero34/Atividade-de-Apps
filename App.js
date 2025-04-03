import React, { useState } from "react";
import { View, Text, TextInput, Switch, Button, Image,StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from '@react-native-community/slider';


export default function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("politica");
  const [author, setAuthor] = useState("jornalista1");
  const [fontSize, setFontSize] = useState(16);
  const [brightness, setBrightness] = useState(50);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const handlePublish = () => alert("Notícia Publicada!");
  const handleClear = () => {
    setTitle("");
    setContent("");
  };

  return (
    <ScrollView style={[styles.container, darkMode && styles.darkBackground]}>
      <Text style={[styles.title, { fontSize: fontSize }]}>Jornal Digital</Text>

      {/* Campos de Texto */}
      <Text style={styles.label}>Título da Notícia:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o título da notícia..."
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Conteúdo:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Escreva a notícia aqui..."
        multiline
        numberOfLines={5}
        value={content}
        onChangeText={setContent}
      />

      {/* Pickers */}
      <Text style={styles.label}>Categoria:</Text>
      <Picker selectedValue={category} onValueChange={setCategory} style={styles.picker}>
        <Picker.Item label="Política" value="politica" />
        <Picker.Item label="Esportes" value="esportes" />
        <Picker.Item label="Entretenimento" value="entretenimento" />
        <Picker.Item label="Tecnologia" value="tecnologia" />
      </Picker>

      <Text style={styles.label}>Autor:</Text>
      <Picker selectedValue={author} onValueChange={setAuthor} style={styles.picker}>
        <Picker.Item label="Jornalista 1" value="jornalista1" />
        <Picker.Item label="Jornalista 2" value="jornalista2" />
        <Picker.Item label="Jornalista 3" value="jornalista3" />
      </Picker>

      {/* Sliders */}
      <Text style={styles.label}>Tamanho da Fonte: {fontSize.toFixed(0)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={24}
        value={fontSize}
        onValueChange={setFontSize}
      />

      <Text style={styles.label}>Brilho da Página: {brightness.toFixed(0)}%</Text>
      <Slider
        style={styles.slider}
        minimumValue={10}
        maximumValue={100}
        value={brightness}
        onValueChange={setBrightness}
      />

      {/* Switches */}
      <View style={styles.switchContainer}>
        <Text>Modo Escuro</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={styles.switchContainer}>
        <Text>Notificações</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      {/* Botões */}
      <Button title="Publicar Notícia" onPress={handlePublish} />
      <Button title="Limpar" onPress={handleClear} color="red" />

      {/* Imagens */}
      <Text style={styles.label}>Últimas Notícias:</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: "https://images.pexels.com/photos/3363111/pexels-photo-3363111.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={styles.image} />
        <Image source={{ uri: "https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={styles.image} />
        <Image source={{ uri: "https://images.pexels.com/photos/45718/pexels-photo-45718.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={styles.image} />
        <Image source={{ uri: "https://images.pexels.com/photos/4068029/pexels-photo-4068029.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={styles.image} />
        <Image source={{ uri: "https://images.pexels.com/photos/1684877/pexels-photo-1684877.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={styles.image} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  darkBackground: { backgroundColor: "#333" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  input: { width: "100%", height: 40, borderWidth: 1, marginVertical: 5, paddingLeft: 10, backgroundColor: "#fff" },
  textArea: { height: 100, textAlignVertical: "top" },
  picker: { height: 40, width: "100%", marginVertical: 5 },
  slider: { width: "100%", marginVertical: 10 },
  switchContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 5 },
  imageContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: 10 },
  image: { width: 150, height: 100, margin: 5 },
});