import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {w} from '../constants';

export const NewsBody = ({data}) => {
  const {h1, cover, container, sub} = styles;
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{uri: data.image}} />
      </View>
      <Text style={h1}>{data.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    paddingVertical: 10,
  },
  sub: {
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  h1: {
    paddingTop: 10,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: w / 2.4,
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
  },
});
