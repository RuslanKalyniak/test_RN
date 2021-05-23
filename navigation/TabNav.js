/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Image, Text} from 'react-native';
import {FeedScreen} from '../screens/FeedScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {AppNavigation} from './AppNavigation';
import {UserScreen} from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

export const TabNav = () => {
  const items = useSelector(state => state.items);

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 90,
            ...style.shadow,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={AppNavigation}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('../icons/3.png')}
                  relizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
                <Text
                  styles={{
                    color: focused ? '#e32f45' : '#748c94',
                    fontSize: 12,
                  }}>
                  HOME
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={FeedScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('../icons/2.png')}
                  relizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
                <Text
                  styles={{
                    color: focused ? '#e32f45' : '#748c94',
                    fontSize: 12,
                  }}>
                  NEWS
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={items ? ProfileScreen : UserScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('../icons/1.png')}
                  relizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
                <Text
                  styles={{
                    color: focused ? '#e32f45' : '#748c94',
                    fontSize: 12,
                  }}>
                  OPTIONS
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
