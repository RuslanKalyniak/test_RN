import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import {w} from '../constants';
import {actions} from '../redux/store';

const storeData = async (token, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(token, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async token => {
  try {
    console.log('In trying to get');
    const jsonValue = await AsyncStorage.getItem(token);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

const admin = {
  username: 'Admin',
  password: '12345',
};

export const UserScreen = props => {
  const [check, setСheck] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const getUserInfo = () => {
    if (admin.username === name && admin.password === password) {
      setСheck(true);
      storeData('login', check);
    } else {
      Alert.alert('Warning!', 'Please write your data.');
      setСheck(false);
      storeData('login', check);
    }

    console.log(check);
    dispatch(actions.addGood(check));
  };

  useEffect(() => {
    getData('login').then(e => setСheck(e));
  }, []);

  return (
    <>
      <View style={styles.container}>
        {check ? (
          <Image source={require('../icons/5.png')} style={styles.icon} />
        ) : (
          <Image source={require('../icons/4.png')} style={styles.icon} />
        )}
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Name"
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={text => setName(text)}
          defaultValue={name}
          clearButtonMode="always"
          autoFocus={true}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="black"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          defaultValue={password}
          clearButtonMode="always"
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => getUserInfo()}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    margin: 15,
    height: 40,
    width: w / 1.2,
    borderColor: 'black',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: 'black',
    padding: 10,
    margin: 15,
    alignItems: 'center',
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
  icon: {
    height: w / 3,
    width: w / 3,
  },
});
