import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import { Colors, Fonts } from './shared/tokens';
import { Button } from './shared/Button/Button';




export default function App() {
  return (
    
    <View style={styles.container}>
      <Image style = {styles.image} source={require('./assets/Coffee-logo.png')} resizeMode='contain'/>
      <View style = {styles.content}>
        <Text style = {styles.Maintextstyle}>Одно из самых вкусных кофе в городе!</Text>
        <Text style = {styles.Undertextstyle}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
        <Button text = "Начать"/>
      </View>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    padding: 50,
  },
  content: {
    gap: 10,
  },
 
  Maintextstyle: { color: Colors.white, fontSize: Fonts.f34, textAlign: 'center', fontWeight: '600'},
  Undertextstyle: { color: Colors.gray, fontSize: Fonts.f14, textAlign: 'center', padding: 5},

  image: {
    height: 600,
    width: 468,
  }
});
