import React from 'react';
import { StyleSheet, Text, View, Image, Slider } from 'react-native';
import { Button } from '../components/button';

function EntriesOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>HOW ARE YOU FEELING TODAY?</Text>
      <Text style={styles.sliderTitle}>ANXIETY LEVEL</Text>
      <View style={styles.sliderTextWrapper}>
        <Text style={styles.sliderText}>NONE</Text>
        <Text style={styles.sliderText}>LOW</Text>
        <Text style={styles.sliderText}>MODERATE</Text>
        <Text style={styles.sliderText}>HIGH</Text>
        <Text style={styles.sliderText}>SEVERE</Text>
      </View>
      <Slider
        style={styles.sliderOne}
      />
      <Text style={styles.sliderTitle}>GENERAL MOOD</Text>
      <View style={styles.sliderTextWrapper}>
        <Text style={styles.sliderText}>AWFUL</Text>
        <Text style={styles.sliderText}>EH</Text>
        <Text style={styles.sliderText}>NEUTRAL</Text>
        <Text style={styles.sliderText}>GOOD</Text>
        <Text style={styles.sliderText}>GREAT</Text>
      </View>
      <Slider
        style={styles.sliderTwo}
      />
      <Button
        text="Next"
        onPress={() => {
          alert("Button Works!");
        }}
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
    marginBottom: 50,
  },
  sliderTitle: {
    color: '#DCE1E9',
    marginBottom: 20,
  },
  sliderTextWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sliderText: {
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
    marginBottom: 50,
  }
});

export default EntriesOne;
