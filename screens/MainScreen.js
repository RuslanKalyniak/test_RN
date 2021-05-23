import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {w} from '../constants';

export const MainScreen = props => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="login"
        type="outline"
        onPress={() => props.navigation.navigate('User')}
      />
      <Button
        style={styles.button}
        title="news"
        type="outline"
        onPress={() => props.navigation.navigate('News')}
      />
      <Button
        style={styles.button}
        title="Profile"
        type="outline"
        onPress={() => props.navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: w / 2,
  },
});
