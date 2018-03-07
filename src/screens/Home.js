import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { IconButton } from '../components/icon-button';

function Home() {
  return (
    <View style={styles.container}>
    <IconButton
      text={require('./../assets/img/Data.png')}
      onPress={() => {
        alert("Button Works!");
      }}
     />
      <Text style={styles.text}>DATA</Text>
      <IconButton
        text={require('./../assets/img/Entries.png')}
        onPress={() => {
          alert("Button Works!");
        }}
       />
      <Text style={styles.text}>ENTRIES</Text>
      <IconButton
        text={require('./../assets/img/NewEntry.png')}
        onPress={() => {
          alert("Button Works!");
        }}
       />
      <Text style={styles.text}>NEW ENTRY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A525A',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 100,
  },
  text: {
    color: '#DCE1E9',
    fontSize: 15,
  }
});

export default Home;
