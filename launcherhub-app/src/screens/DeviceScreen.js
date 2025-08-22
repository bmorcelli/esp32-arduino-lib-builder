import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList } from 'react-native';
import { discoverDevices, manualDevice } from '../services/discovery';
import { performOTA } from '../services/ota';

export default function DeviceScreen({ route }) {
  const { fileUri } = route.params;
  const [devices, setDevices] = useState([]);
  const [ip, setIp] = useState('');

  const handleDiscover = async () => {
    const found = await discoverDevices();
    setDevices(found);
  };

  const handleManualAdd = () => {
    if (ip) setDevices([...devices, manualDevice(ip)]);
  };

  const handleOTA = async (device) => {
    try {
      await performOTA(device.ip, fileUri);
      alert('Update successful');
    } catch (e) {
      alert('OTA failed: ' + e.message);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Discover" onPress={handleDiscover} />
      <TextInput placeholder="Manual IP" value={ip} onChangeText={setIp} style={{ borderWidth: 1, marginVertical: 8, padding: 8 }} />
      <Button title="Add" onPress={handleManualAdd} />
      <FlatList
        data={devices}
        keyExtractor={(item, idx) => item.ip + idx}
        renderItem={({ item }) => (
          <View style={{ padding: 8 }}>
            <Text>{item.ip}</Text>
            <Button title="Start OTA" onPress={() => handleOTA(item)} />
          </View>
        )}
      />
    </View>
  );
}
