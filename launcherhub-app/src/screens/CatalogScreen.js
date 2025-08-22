import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TextInput, Image, ActivityIndicator } from 'react-native';
import { fetchCatalog } from '../services/api';

export default function CatalogScreen({ navigation }) {
  const [brand, setBrand] = useState('');
  const [device, setDevice] = useState('');
  const [name, setName] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCatalog()
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  const filtered = items.filter((item) =>
    item.brand?.toLowerCase().includes(brand.toLowerCase()) &&
    item.device?.toLowerCase().includes(device.toLowerCase()) &&
    item.name?.toLowerCase().includes(name.toLowerCase())
  );

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 16 }}>
        <TextInput placeholder="Marca" value={brand} onChangeText={setBrand} />
        <TextInput placeholder="Device" value={device} onChangeText={setDevice} />
        <TextInput placeholder="Firmware" value={name} onChangeText={setName} />
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={{ borderWidth: 1, margin: 8, padding: 16 }}>
            {item.image && (
              <Image source={{ uri: item.image }} style={{ height: 100, marginBottom: 8 }} />
            )}
            <Text>{item.name}</Text>
            <Text>{item.brand} - {item.device}</Text>
            <Text numberOfLines={expandedId === item.id ? undefined : 2}>{item.description}</Text>
            <Button title={expandedId === item.id ? 'Menos' : 'Mais'} onPress={() => toggleExpand(item.id)} />
            <Button title="Ver Detalhes" onPress={() => navigation.navigate('Firmware', { firmware: item })} />
          </View>
        )}
      />
    </View>
  );
}
