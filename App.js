import React, { useState } from "react";
import { View, Text, TextInput, Switch, Button, Image, StyleSheet, ScrollView, Alert } from "react-native";
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
  const [image, setImage] = useState(null);
  const [publishedNews, setPublishedNews] = useState(null);

  const handlePublish = () => {
    if (title.trim() === "" || content.trim() === "") {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios antes de publicar.");
      return;
    }
    setPublishedNews({ title, content, category, author, image });
    Alert.alert("Sucesso", "Notícia Publicada!");
  };

  const handleClear = () => {
    setTitle("");
    setContent("");
    setImage(null);
    setPublishedNews(null);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView style={[styles.container, darkMode && styles.darkBackground]}>
      <Text style={[styles.title, { fontSize: fontSize }]}>Jornal Digital</Text>

      {/* Campos de Texto */}
      <Text style={styles.label}>Título da Notícia:</Text>
      <TextInput style={styles.input} placeholder="Digite o título da notícia..." value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Conteúdo:</Text>
      <TextInput style={[styles.input, styles.textArea]} placeholder="Escreva a notícia aqui..." multiline numberOfLines={5} value={content} onChangeText={setContent} />

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
      <Slider style={styles.slider} minimumValue={12} maximumValue={24} value={fontSize} onValueChange={setFontSize} />

      <Text style={styles.label}>Brilho da Página: {brightness.toFixed(0)}%</Text>
      <Slider style={styles.slider} minimumValue={10} maximumValue={100} value={brightness} onValueChange={setBrightness} />

      {/* Switches */}
      <View style={styles.switchContainer}>
        <Text>Modo Escuro</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={styles.switchContainer}>
        <Text>Notificações</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      {/* Input de Imagem */}
      <Button title="Adicionar Imagem" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}

      {/* Botões */}
      <Button title="Publicar Notícia" onPress={handlePublish} />
      <Button title="Limpar" onPress={handleClear} color="red" />

      {/* Exibição da Notícia Publicada */}
      {publishedNews && (
        <View style={styles.publishedNews}>
          <Text style={styles.publishedTitle}>{publishedNews.title}</Text>
          <Text style={styles.publishedContent}>{publishedNews.content}</Text>
          <Text>Categoria: {publishedNews.category}</Text>
          <Text>Autor: {publishedNews.author}</Text>
          {publishedNews.image && <Image source={{ uri: publishedNews.image }} style={styles.image} />}
        </View>
      )}
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
  image: { width: 200, height: 150, margin: 10, alignSelf: "center" },
  publishedNews: { marginTop: 20, padding: 10, backgroundColor: "#f5f5f5", borderRadius: 5 },
  publishedTitle: { fontSize: 20, fontWeight: "bold" },
  publishedContent: { fontSize: 16, marginVertical: 5 },
});
