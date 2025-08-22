import React from 'react';
import { View, Text, Image, Button, FlatList } from 'react-native';
import { downloadFile } from '../services/download';

export default function FirmwareScreen({ route, navigation }) {
  const { firmware } = route.params;

  const handleDownload = async (version) => {
    const uri = await downloadFile(version.url);
    navigation.navigate('Device', { fileUri: uri });
  };

  return (
    <View style={{ padding: 16 }}>
      <Image source={{ uri: firmware.image }} style={{ height: 200, marginBottom: 16 }} />
      <Text>{firmware.name}</Text>
      <Text>{firmware.brand} - {firmware.device}</Text>
      <Text style={{ marginVertical: 8 }}>{firmware.description}</Text>
      <FlatList
        data={firmware.versions}
        keyExtractor={(item) => item.version}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>Versão {item.version}</Text>
            <Button title="Download" onPress={() => handleDownload(item)} />
          </View>
        )}
      />
    </View>
  );
}
