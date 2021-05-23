import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export const Loyut = props => {
  return (
    <ScrollView>
      <View style={styles.container}>{props.children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 150,
  },
});
