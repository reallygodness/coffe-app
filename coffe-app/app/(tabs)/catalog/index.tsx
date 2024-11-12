import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Colors } from '../../../shared/tokens';
import SearchBar from '../../../shared/SearchBar/SearchBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CardList from '../../../enteties/card/widgets/CardList';
import { UnionKeys } from '../../../shared/Button/buttonbar/buttonBar.type';
import ButtonBar from '../../../shared/Button/buttonbar/buttonBar';
import AddressLine from '../../../shared/AdressLine/adressline';

export default function Tab() {
  const [text, onChangeText] = useState<string>('');
  const [activeKey, setActiveKey] = useState<UnionKeys>('Все');
  const [isFilter, setIsFilter] = useState<boolean>(true);
  
  return (
    <View style = {styles.mainContainer}>
      <View style = {styles.container}>
        <AddressLine/>
        <SearchBar text = {text} onChangeText={(value) => onChangeText(value)}></SearchBar>
      </View>

      <View style = {styles.containerBody}>
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
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.lightBG,
  },

  container: {
    backgroundColor: Colors.black,
    padding: 30,
  },

  containerBody: {
    paddingTop: 28,
    backgroundColor: Colors.lightBG,
    width: '100%',
    gap: 24,
  }

});
