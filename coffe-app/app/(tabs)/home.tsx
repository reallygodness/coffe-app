import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Colors } from '../../shared/tokens';
import SearchBar from '../../shared/SearchBar/SearchBar';
import { coffeAtom } from '../../enteties/user/model/coffe.state';
import { useAtom } from 'jotai';
import axios from 'axios';
import { API } from '../../enteties/auth/api/api';
import { SearchResponse } from '../../enteties/auth/model/search.interfaces';
import { getCoffeAtom } from '../../enteties/auth/model/search.state';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ButtonFilter } from '../../shared/Button/ButtonFilter';



export default function Tab() {
  const [search, getCoffe] = useAtom(getCoffeAtom);

  useEffect(() => {
    getCoffe({type: 'cappuccino', text: 'капучино' })
    console.log(search.subTitle)
  }, [])
  
  return (
    <SafeAreaProvider style = {{backgroundColor: Colors.white}}>
      <SafeAreaView style = {styles.container}>
        <SearchBar></SearchBar>
      </SafeAreaView>

      <SafeAreaView style = {styles.containerBody}>
        <ButtonFilter text='Все'></ButtonFilter>
        <ButtonFilter text='Капучино'></ButtonFilter>
        <ButtonFilter text='Макиятто'></ButtonFilter>
        <ButtonFilter text='Латте'></ButtonFilter>
      </SafeAreaView>
    </SafeAreaProvider>
   
         
  );
}

const styles = StyleSheet.create({      
  container: {
    marginTop: 0,
    backgroundColor: Colors.black,
    paddingBottom: 100
  },

  containerBody: {
    marginTop: 20,
    marginLeft: 30,
    flexDirection: 'row',
  }

});
