import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("./../assets/img/data.png")} style={{width: 80, height: 80}} />
      <Text style={styles.text}>DATA</Text>
      <Image source={require("./../assets/img/entries.png")} style={{width: 80, height: 80}} />
      <Text style={styles.text}>ENTRIES</Text>
      <Image source={require("./../assets/img/new-entry.png")} style={{width: 80, height: 80}} />
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
