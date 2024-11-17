import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../shared/tokens';
import SearchBar from '../../shared/SearchBar/SearchBar';
import { coffeAtom } from '../../enteties/user/model/coffe.state';
import { useAtom } from 'jotai';
import axios from 'axios';
import { API } from '../../enteties/auth/api/api';
import { SearchResponse } from '../../enteties/auth/model/search.interfaces';
import { getCoffeAtom } from '../../enteties/auth/model/search.state';



export default function Tab() {
  const [search, getCoffe] = useAtom(getCoffeAtom);

  useEffect(() => {
    getCoffe({type: 'cappuccino', text: 'капучино' })
    console.log(search.subTitle)
  }, [])
  
  return (
    <View style={styles.container}>
      <View style = {styles.searchbar}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({      
  container: {
    
  },
  searchbar: {
    backgroundColor: Colors.black
  }
});
