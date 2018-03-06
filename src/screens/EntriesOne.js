import React from 'react';
import { StyleSheet, Text, View, Image, Slider, Button } from 'react-native';

function EntriesOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>HOW ARE YOU FEELING TODAY?</Text>
      <Text style={styles.sliderTitleOne}>ANXIETY LEVEL</Text>
      <View style={styles.sliderOneTextWrapper}>
        <Text style={styles.sliderTextOne}>NONE</Text>
        <Text style={styles.sliderTextOne}>LOW</Text>
        <Text style={styles.sliderTextOne}>MODERATE</Text>
        <Text style={styles.sliderTextOne}>HIGH</Text>
        <Text style={styles.sliderTextOne}>SEVERE</Text>
      </View>
      <Slider
        style={styles.sliderOne}
      />
      <Text style={styles.sliderTitleTwo}>GENERAL MOOD</Text>
      <Slider
        style={styles.sliderTwo}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A525A',
    alignItems: 'center',
  },
  titleText: {
    color: '#DCE1E9',
    fontSize: 20,
    marginTop: 125,
    marginBottom: 100,
  },
  sliderTitleOne: {
    color: '#DCE1E9',
    marginBottom: 20,
  },
  sliderOneTextWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sliderTextOne: {
    color: '#DCE1E9',
  },
  sliderOne: {
    width: 300,
    marginBottom: 100,
  },
  sliderTitleTwo: {
    color: '#DCE1E9',
  },
  sliderTwo: {
    width: 300,
  }
});

export default EntriesOne;
