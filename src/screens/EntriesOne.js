import React from 'react';
import { StyleSheet, Text, View, Image, Slider } from 'react-native';

function EntriesOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOW ARE YOU FEELING TODAY?</Text>
      <Text style={styles.sliderText}></Text>
      <Slider
        style={{ width: 300}}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A525A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#DCE1E9',
    fontSize: 20,
  }
});

export default EntriesOne;
