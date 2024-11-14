import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AddressLine from '../../shared/Adressline/addressline';
import CardList from '../../enteties/card/ui/CardList';
import { Colors } from '../../shared/tokens';
import SearchBar from '../../shared/SearchBar/SearchBar';
import ButtonBar from '../../shared/Button/ButtonBar';
import { UnionKeys } from '../../shared/Button/ButtonBar.type';

export default function Catalog() {
  const [text, onChangeText] = useState<string>('');
  const [activeKey, setActiveKey] = useState<UnionKeys>('Все');
  const [isFilter, setIsFilter] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AddressLine />
        <SearchBar text={text} onChangeText={(value) => onChangeText(value)} />
      </View>

      <View style={styles.body}>
        <ButtonBar
          inputText={text}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          setIsFilter={setIsFilter}
          isFilter={isFilter}
        />
        <CardList
          inputText={text}
          onChangeText={onChangeText}
          activeKey={activeKey}
          isFilter={isFilter}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBG,
  },

  header: {
    backgroundColor: Colors.black,
    padding: 30,
  },
  body: {
    paddingTop: 28,
    backgroundColor: Colors.lightBG,
    width: '100%',
    gap: 24,
  },
});
